import React, { useContext } from 'react'
import ToDoContext from '../Contexts/ToDoContext';

function NoteFeatures({MyIndex, showAllFeatures}) {

    const {
        setShowLabelOptions,
        setShowEachNoteoptions,
        setShowEachLabelOptions
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
                                    i === MyIndex ? { ...item, Labeloptionstate: true } : { ...item, Labeloptionstate: false }
                                )
                            );
                    }}
                    > Add Label </li>
                    {
                        showAllFeatures && (
                            <>
                                <li
                                    className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                                > Copy Note </li>
                                <li
                                    className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                                > Make a Copy </li>
                                <li
                                    className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
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