import React, { useContext } from 'react'
import ToDoContext from '../Contexts/ToDoContext';
import { v4 as uuidv4 } from 'uuid';

function NoteFeatures({showAllFeatures=false, curtIndex=null, curtNote=null}) {
    const {
        setShowLabelOptions,
        setShowEachNoteoptions,
        setShowEachLabelOptions,
        copyNote,
        DeleteNote,
        setNotesCollection
        } = useContext(ToDoContext);

    return (
        <>
            <div className={`border-1 bg-white border-[#949392] rounded-xl shadow-2xl text-blue-950 px-1 py-2 z-100`}>
                <ul className='flex flex-col gap-2'>
                    <li
                        className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px] '
                        onClick = { () => {
                            setShowLabelOptions(true) // for creating Note
                            // for existing Note
                            // close Note Options
                            setShowEachNoteoptions((prevOptions) =>
                                prevOptions.map((item, i) => ( { ...item, optionstate: false } ) )
                            );
                            // open Label Options
                            setShowEachLabelOptions((prevOptions) =>
                                prevOptions.map((item, i) =>
                                    i === curtIndex ? { ...item, Labeloptionstate: true } : { ...item, Labeloptionstate: false }
                                )
                            );
                    }}
                    > Add Label </li>
                    {
                        showAllFeatures && (
                            <>
                                <li
                                    className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                                    onClick = { () => {
                                        copyNote( curtNote, curtIndex );
                                        setShowEachNoteoptions((prevOptions) =>
                                            prevOptions.map((item, i) => ( { ...item, optionstate: false } ) )
                                        );
                                    } }
                                > Copy Note </li>
                                <li
                                    className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                                    onClick={() => {
                                        console.log("i am make a copy");
                                        // setNotesCollection((prev) => [...prev, curtNote]);
                                        setNotesCollection((prev) => [...prev, { ...curtNote, id: uuidv4() } ]);
                                        setShowEachNoteoptions((prevOptions) =>
                                            prevOptions.map((item, i) => ( { ...item, optionstate: false } ) )
                                        );
                                    }}
                                > Make a Copy </li>
                                <li
                                    className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                                    onClick = { () => DeleteNote(curtNote) }
                                > Delete Note </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default NoteFeatures ;