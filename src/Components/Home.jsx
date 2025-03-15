import React from 'react'
import { NavLink } from "react-router";

function Home() {
    return (
        <>
        <div className='w-full text-center flex justify-center'>
            <p className='sm:w-[60vw] w-[80vw] sm:m-15 m-10 md:text-5xl sm:text-4xl text-2xl font-medium font-ubuntu word-spacing-custom'>
                Capture your <span className='text-red-700'>thoughts</span>, organize with <span className='text-red-700'>ease</span>, and bring your ideas to <span className='text-red-700'>life</span>.
            </p>
        </div>
        <div className='border-0 w-full sm:py-10 flex sm:flex-row flex-col items-center justify-center sm:gap-25 gap-15 text-3xl text-blue-950'>
            <NavLink
                to={"/myNotes"}
                className='sm:w-[25%] w-[65%] h-[10vh] flex justify-center items-center rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-400 border border-transparent border-t-4 border-t-red-700 hover:border-2 hover:border-gray-500'
            >
                MyNotes
            </NavLink>
            <NavLink
                to={"/myToDos"}
                className='sm:w-[25%] w-[65%] h-[10vh] flex justify-center items-center rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-gray-400 border border-transparent border-t-4 border-t-red-700 hover:border-2 hover:border-gray-500'
            >
                MyToDos
            </NavLink>
        </div>
        </>
    )
}

export default Home ;