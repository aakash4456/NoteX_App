import React from 'react'
import { useState, useEffect } from 'react';
import ToDoContext from './ToDoContext';

function ToDoContextProvider ({children}) {
    const storeNotes = "NotesCollection"
    const storeLabels = "LabelCollection"

    const [showCreatingNote, setShowCreatingNote] = useState(false);
    const [showNoteCard, setShowNoteCard] = useState(false);
    const [boldtext, setBoldtext] = useState(false);
    const [italicText, setItalicText] = useState(false);
    const [underlineText, setUnderlineText] = useState(false);
    const [DateNow, setDateNow] = useState('');
    const [editcurNote, setEditcurNote] = useState('');

    const [labelCollection, setLabelCollection] = useState(() => {
        const RawData = localStorage.getItem(storeLabels);
        if(RawData === null){
            // console.log("in if");
            // console.log(RawData);
            return [];
        } else {
            // console.log("in else");
            // console.log(RawData);
            return JSON.parse(RawData) ;
        }
    });
    
    const [notesCollection, setNotesCollection] = useState(() => {
        const RawData = localStorage.getItem(storeNotes);
        if(RawData === null){
            // console.log("in if");
            // console.log(RawData);
            return [];
        } else {
            // console.log("in else");
            // console.log(RawData);
            return JSON.parse(RawData) ;
        }
    });

    // set data in localStorage on mount
    localStorage.setItem(storeNotes, JSON.stringify(notesCollection));
    localStorage.setItem(storeLabels, JSON.stringify(labelCollection));

    const [taskCollection, settaskCollection] = useState([
        {
            id : 1,
            ToDo : '',
            Completed : false
        }
    ]);


    return (
    <ToDoContext.Provider value={{showCreatingNote, setShowCreatingNote, notesCollection, setNotesCollection, showNoteCard, setShowNoteCard, DateNow, setDateNow, boldtext, setBoldtext, italicText, setItalicText, underlineText, setUnderlineText, editcurNote, setEditcurNote, labelCollection, setLabelCollection}}>
        {children}
    </ToDoContext.Provider >
    )
}

export default ToDoContextProvider ;