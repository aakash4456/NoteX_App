import React from 'react'
import { useContext } from 'react';
import ForToDos_Context from '../Contexts/ForToDos_Context';


function ToDoAddTask() {
    const {inputValue, setInputValue, btnHandler} = useContext(ForToDos_Context);
    
    return (
    <>
        <form
        className='p-3 sm:mt-5 sm:mb-20 mb-10 md:w-[32vw] sm:w-[55vw] w-[85vw] min-h-[90px] flex items-center justify-center flex-wrap rounded-xl shadow-lg shadow-gray-300 border-t-4 border-t-red-700 gap-5'>
            <input
                className='w-[65%] h-[40px] rounded border-2 border-blue-950 pl-1 outline-none'
                type='text'
                placeholder='Add ToDo'
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                className='border-0 rounded-2xl px-5 py-1 text-[18px] bg-blue-950 text-white hover:bg-red-800 hover:font-semibold'
                type='submit'
                onClick={btnHandler}
                >
                Add
            </button>
        </form>
    </>
    )
}

export default ToDoAddTask ;