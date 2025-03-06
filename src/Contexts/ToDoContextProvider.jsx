import React from 'react'
import { useState, useEffect } from 'react';
import ToDoContext from './ToDoContext';

function ToDoContextProvider ({children}) {
    const storageKey = "NotesCollection"

    const [showPopup, setShowPopup] = useState(false);
    const [showNoteCard, setShowNoteCard] = useState(false);
    const [boldtext, setBoldtext] = useState(false);
    const [italicText, setItalicText] = useState(false);
    const [underlineText, setUnderlineText] = useState(false);
    const [DateNow, setDateNow] = useState('');
    const [editcurNote, setEditcurNote] = useState('');
    
    const [notesCollection, setNotesCollection] = useState(() => {
        const RawData = localStorage.getItem(storageKey);
        if(RawData === null){
            console.log("in if");
            console.log(RawData);
            return [];
        } else {
            console.log("in else");
            console.log(RawData);
            return JSON.parse(RawData) ;
        }
    });

    // set data in localStorage on mount
    localStorage.setItem(storageKey, JSON.stringify(notesCollection));

    const [taskCollection, settaskCollection] = useState([
        {
            id : 1,
            ToDo : '',
            Completed : false
        }
    ]);


    return (
    <ToDoContext.Provider value={{showPopup, setShowPopup, notesCollection, setNotesCollection, showNoteCard, setShowNoteCard, DateNow, setDateNow, boldtext, setBoldtext, italicText, setItalicText, underlineText, setUnderlineText, editcurNote, setEditcurNote}}>
        {children}
    </ToDoContext.Provider >
    )
}

export default ToDoContextProvider ;