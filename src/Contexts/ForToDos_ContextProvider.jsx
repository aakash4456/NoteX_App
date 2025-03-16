import React from 'react'
import { useState } from 'react';
import ForToDos_Context from './ForToDos_Context';

const storageKey = "storeToDo"

function ForToDos_ContextProvider({children}) {

    const [inputValue, setInputValue] = useState('');

    const [task, setTask] = useState(() => {
        const rawData = localStorage.getItem(storageKey);
        if(!rawData) return [];
        return JSON.parse(rawData);
    });
    localStorage.setItem(storageKey, JSON.stringify(task));

    const btnHandler = (e) => {
        e.preventDefault();
        // check to Input is empty.
        if(!inputValue) {
            return;
        };
        // Check to does task have already inputed value.
        if(task.includes(inputValue)) {
            setInputValue('');
            return;
        };
        setTask((prevTask) => [...prevTask, inputValue]);
        setInputValue('');
    }

    // save Data in Local Storage
    
    return (
        <ForToDos_Context.Provider value={{inputValue, setInputValue, task, setTask, btnHandler}}>
            {children}
        </ForToDos_Context.Provider>
    )
}

export default ForToDos_ContextProvider ;