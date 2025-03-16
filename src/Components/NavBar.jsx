import React, { useState } from 'react'
import { NavLink } from "react-router";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import NoteXLogo from './NoteXLogo';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
    <>
        <div className='relative w-full h-[8vh] flex md:justify-around justify-between items-center bg-white sm:px-2'>
            <div className=' md:scale-100 scale-70 relative right-5'>
                <NoteXLogo/>
            </div>
            {/* Nav Bar Options when Screen Size is greater than medium */}
            <div>
                <ul className='hidden md:flex gap-12 text-blue-950'>
                    <li>
                        <NavLink
                            to={"/"}
                            className={({isActive})=>`${isActive ? "text-red-700 font-extrabold": "text-blue-950"}`}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/myNotes"}
                            className={({isActive})=>`${isActive ? "text-red-700 font-extrabold": "text-blue-950"}`}
                        >
                            MyNotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/myToDos"}
                            className={({isActive})=>`${isActive ? "text-red-700 font-extrabold": "text-blue-950"}`}
                        >
                            MyToDos
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="md:hidden relative w-10 h-10 flex justify-center items-center">
                <IoIosMenu
                    className={`absolute text-3xl transition-all duration-300 ease-in-out transform ${
                    showMenu ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                    onClick={() => setShowMenu(true)}
                />
                <RxCross1
                    className={`absolute text-3xl transition-all duration-300 ease-in-out transform ${
                    showMenu ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    onClick={() => setShowMenu(false)}
                />
            </div>
        </div>
        {/* Nav Bar Options when Screen Size is less than medium */}
        {showMenu && (
            <div className='md:hidden absolute top-[7vh] right-[6vw] w-[200px] bg-white border-2 border-[#949392] rounded-xl z-100'>
                <ul className='text-blue-950 text-xl h-[100%]'>
                    <NavLink
                        to={"/"}
                        className={({isActive})=>`${isActive ? "text-red-700 font-bold": "text-blue-950"} `}
                        onClick={() => setShowMenu(false)}
                    >
                        <li className='cursor-pointer rounded-xl h-[50px] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300' > Home </li>
                    </NavLink>
                    <NavLink
                        to={"/myNotes"}
                        className={({isActive})=>`${isActive ? "text-red-700 font-bold": "text-blue-950"} `}
                        onClick={() => setShowMenu(false)}
                    >
                        <li className='cursor-pointer rounded-xl h-[50px] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300' > MyNotes </li>
                    </NavLink>
                    <NavLink
                        to={"/myToDos"}
                        className={({isActive})=>`${isActive ? "text-red-700 font-bold": "text-blue-950"} `}
                        onClick={() => setShowMenu(false)}
                    >
                        <li className='cursor-pointer rounded-xl h-[50px] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300' > MyToDos </li>
                    </NavLink>
                </ul>
            </div>
        )}
    </>
    )
}

export default NavBar ;