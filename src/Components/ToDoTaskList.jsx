import React, { useContext } from 'react'
import { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdLeakRemove, MdOutlineDeleteForever } from "react-icons/md";
import ForToDos_Context from '../Contexts/ForToDos_Context';

function ToDoTaskList() {
    const {task, setTask} = useContext(ForToDos_Context);

    // function to show that task has been done.
    const TaskDone = (eleId, taskName) => {
        const element1 = document.getElementById(eleId);
        if(element1.innerHTML !== `<s>${taskName}</s>`){
            element1.innerHTML = `<s>${taskName}</s>`
        }
        else{
            element1.innerHTML = `${taskName}`
        }
    }
    // delete a single task from the ToDo List.
    const deletetask = (taskName) => {
        const newtask = task.filter((item) => (item !== taskName ));
        setTask(newtask);
    }
    // function to delete all tasks from the to do list.
    const deleteAlltask = () => {
        setTask([]);
    }

    return (
    <>
        <div 
            className='border-2 border-gray-300 py-4 w-[95vw] rounded-xl flex flex-col sm:flex-row items-center sm:justify-evenly flex-wrap sm:content-start sm:gap-y-10 gap-y-6 mb-5 min-h-[45vh]'
        >
            {
                task.map((curTask, index)=>{
                    return <div key={index}
                        className='w-[85vw] h-[60px] sm:w-[25vw] sm:h-[70px] flex items-center justify-between sm:flex-wrap rounded-xl px-3 shadow-lg shadow-gray-300 border-b-2 hover:border-b-red-700 hover:scale-101 transition duration-300 border-t-3 border-t-blue-950 relative'
                    >
                        <span id={`task-${index}`} className='text-2xl w-[65%] overflow-x-hidden ' >{curTask}</span>
                        <div className='flex gap-6 border-0'>
                            <button
                                className=' text-3xl hover:text-red-700 cursor-pointer'
                                onClick={() => {
                                    TaskDone(`task-${index}`, curTask);
                                }}
                                >
                                <IoMdCheckmarkCircleOutline />
                            </button>
                            <button
                                className='text-3xl hover:text-red-700 cursor-pointer'
                                onClick={() => {
                                    deletetask(curTask);
                                }}
                                >
                                <MdOutlineDeleteForever />
                            </button>
                        </div>
                    </div>
                })
            }
        </div>
        <button
            className='rounded-xl px-4 py-1 text-[18px] bg-blue-950 text-white hover:bg-red-800 hover:scale-102 transition duration-100'
            onClick={deleteAlltask}
            >
            Clear all Tasks
        </button>
    </>
    )
}

export default ToDoTaskList ;