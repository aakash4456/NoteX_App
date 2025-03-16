import React from 'react'
import { useState, useEffect, useRef } from 'react';
import ToDoContext from './ToDoContext';

function ToDoContextProvider ({children}) {
    // local storage keys
    const storeNotes = "NotesCollection"
    const storeLabels = "LabelCollection"

    const [showCreatingNote, setShowCreatingNote] = useState(false);
    const [boldtext, setBoldtext] = useState(false);
    const [italicText, setItalicText] = useState(false);
    const [underlineText, setUnderlineText] = useState(false);
    const [DateNow, setDateNow] = useState('');
    const [editcurNote, setEditcurNote] = useState(''); // triger when user try to update an existing Note.

    // variables related to Labels
    const [showLabelOptions, setShowLabelOptions] = useState(false); // use to show Label options while creating/updating a Note.
    const [noteLabel, setNoteLabel] = useState('');
    const [noteColor, setNoteColor] = useState('#172554');
    const checkedRef = useRef([]); // references for all Labels.
    const inputLabelRef = useRef(null);
    
    // Variables for Notes present in NoteCard
    const [showEachNoteOptions, setShowEachNoteoptions] = useState([]);
    const [showEachLabelOptions, setShowEachLabelOptions] = useState([]);

    const copyRef = useRef([]); // reference to copy of a specific note value.

    // Array to store All Notes.
    const [notesCollection, setNotesCollection] = useState(() => {
        const RawData = localStorage.getItem(storeNotes);
        if(RawData === null){
            return [];
        } else {
            return JSON.parse(RawData) ;
        }
    });

    // Array to store all label which are associated with atleast one note.
    const [labelCollection, setLabelCollection] = useState(() => {
        const RawData = localStorage.getItem(storeLabels);
        if(RawData === null){
            return [];
        } else {
            return JSON.parse(RawData) ;
        }
    });

    // set data in localStorage on mount
    localStorage.setItem(storeNotes, JSON.stringify(notesCollection));
    localStorage.setItem(storeLabels, JSON.stringify(labelCollection));

    // creating references for each new created label.
    useEffect(() => {
        checkedRef.current = labelCollection.map((_, i) => checkedRef.current[i] || React.createRef());
    }, [labelCollection]);

    // updates label collection. remains only those labels who are related to atleast one Note.
    useEffect(() => {
        const newLabels = labelCollection.filter(curLabel => 
            notesCollection.some(curNote => curNote.MyLabel === curLabel.LabelName)
        );
            if (JSON.stringify(newLabels) !== JSON.stringify(labelCollection)) {
            setLabelCollection(newLabels);
        }
    
        const newNoteCollection = notesCollection.map((curNote) => {
            const matchedLabel = labelCollection.find(curLabel => curNote.MyLabel === curLabel.LabelName);
            return matchedLabel ? { ...curNote, MyColor: matchedLabel.LabelColor } : curNote;
        });
        if (JSON.stringify(newNoteCollection) !== JSON.stringify(notesCollection)) {
            setNotesCollection(newNoteCollection);
        }
    }, [notesCollection]);

    // function for copy a Note value
    const copyNote = (curtNote, index) => {
        const selectText = copyRef.current[index]?.current;
        if(selectText){
            selectText.select();
            window.navigator.clipboard.writeText(curtNote.Note);
        }
    }

    // function for deleting a Note
    const DeleteNote = (curtNote) => {
        const newNoteCollection = notesCollection.filter((item) => (item !== curtNote ));
        setNotesCollection(newNoteCollection);
    };
    
    return (
    <ToDoContext.Provider
        value ={{ showCreatingNote, setShowCreatingNote,
                notesCollection, setNotesCollection,
                DateNow, setDateNow,
                boldtext, setBoldtext,
                italicText, setItalicText,
                underlineText, setUnderlineText,
                editcurNote, setEditcurNote,
                labelCollection, setLabelCollection,
                showLabelOptions, setShowLabelOptions,
                showEachNoteOptions, setShowEachNoteoptions,
                showEachLabelOptions, setShowEachLabelOptions,
                noteLabel, setNoteLabel,
                noteColor, setNoteColor,
                checkedRef,
                inputLabelRef,
                copyRef,
                copyNote,
                DeleteNote
    }}>
        {children}
    </ToDoContext.Provider >
    )
}

export default ToDoContextProvider ;