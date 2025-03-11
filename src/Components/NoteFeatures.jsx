import React, { useContext } from 'react'
import ToDoContext from '../Contexts/ToDoContext';

function NoteFeatures() {

    const { showLabelOptions, setShowLabelOptions } = useContext(ToDoContext);

    return (
        <>
            <div className='border-1 absolute right-1 top-7 bg-white border-[#949392] rounded-xl w-[200px] shadow-2xl text-blue-950 px-1 py-2'>
                <ul className='flex flex-col gap-2'>
                    <li
                        className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px] '
                        onClick = { () => setShowLabelOptions(true) }
                    > Add Label </li>
                    <li
                        className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                    > Copy Note </li>
                    <li
                        className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                    > Make a Copy </li>
                    <li
                        className='cursor-pointer pl-3 hover:bg-[#dbd7d5] transition duration-500 rounded-xl h-[30px]'
                    > Delete Note </li>
                </ul>
            </div>
        </>
    )
}

export default NoteFeatures ;