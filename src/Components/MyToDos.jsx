import React, { useContext } from 'react'
import ToDoAddTask from './ToDoAddTask'
import ToDoTaskList from './ToDoTaskList'
import ForToDos_Context from '../Contexts/ForToDos_Context'
import { LuListTodo } from "react-icons/lu";

function MyToDos() {
    const {task} = useContext(ForToDos_Context);
    return (
        <div 
        className='border-0 mt-10 flex flex-col items-center'>
            <ToDoAddTask />
            {task.length === 0 && (
                <div className='sm:h-[40vh] h-[35vh] sm:w-[390px] w-[250px] flex justify-center items-center rounded-2xl hover:scale-101 transition-all duration-300 shadow-lg shadow-gray-300 border border-transparent border-t-8 border-t-red-700 hover:border-2 hover:border-gray-500 text-8xl bg-blue-950 text-white cursor-pointer'>
                    <LuListTodo />
                </div>
            )}
            {task.length > 0 && (
                <ToDoTaskList />
            )}
        </div>
    )
}

export default MyToDos;