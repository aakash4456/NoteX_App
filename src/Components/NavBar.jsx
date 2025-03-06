import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function NavBar() {
    // const [showLines, setShowLines] = useState(true);
    // const [showCross, setShowCross] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
    <>
        <div className='relative w-full h-[8vh] flex justify-around items-center bg-white '>
            {/* Logo */}
            <div>
                <h1 className='font-bold text-3xl '>NoteX</h1>
            </div>
            
            {/* Nav Bar Options when Screen Size is greater than medium */}
            <div>
                <ul className='hidden md:flex gap-12 text-blue-950'>
                    <li className='cursor-pointer'>Contact Us</li>
                    <li className='cursor-pointer'>Help</li>
                    <li className='cursor-pointer'>Log In</li>
                    <li className='cursor-pointer'>Sign Up</li>
                </ul>
            </div>
            
            {/* ************************ Third Method to handle Menu Options ************************ */}
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

        {/* Mobile Menu - Positioned Absolutely Over Navbar */}
        {/* Nav Bar Options when Screen Size is less than medium */}
        {showMenu && (
            <div className='absolute top-[7vh] right-[14vw] w-[200px] h-[250px] bg-white border-2 border-[#949392] rounded-xl z-100'>
                <ul className='text-blue-950 text-xl h-[100%]'>
                    <li className='cursor-pointer h-[25%] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300'>Contact Us</li>
                    <li className='cursor-pointer h-[25%] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300'>Help</li>
                    <li className='cursor-pointer h-[25%] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300'>Log In</li>
                    <li className='cursor-pointer h-[25%] pt-2 pl-2 hover:bg-[#dbd7d5] transition duration-300'>Sign Up</li>
                </ul>
            </div>
        )}
    </>
    )
}

export default NavBar

// ************************ First Method ************************
// pre Designed Methad to handle Menu bar icon
// {
//     showLines && (
//         <div className='md:hidden'>
//             <IoIosMenu className='text-3xl border-1 rounded'
//             onClick={(e) => {
//                 e.preventDefault();
//                 setShowLines(false);
//                 setShowCross(true);
//                 setShowMenu(true);
//             }}/>
//         </div>
// )}
// {
//     showCross && (
//         <>
//             <div className='md:hidden'>
//                 <RxCross1 className='text-3xl border-1 rounded'
//                 onClick={(e) => {
//                     e.preventDefault();
//                     setShowCross(false);
//                     setShowMenu(false);
//                     setShowLines(true);
//                 }}/>
//             </div>
//         </>
// )}

// ************************ Second Method ************************
{/* <div className='md:hidden'>
        {(showMenu)
            ? 
                <RxCross1 className='text-3xl border-1 rounded transition duration-3000 ease-in-out'
                    onClick={(e) => {
                        e.preventDefault();
                        setShowMenu(false);
                        // setShowCross(false);
                        // setShowLines(true);
                    }}/> 
            :   <IoIosMenu className='text-3xl border-1 rounded'
                    onClick={(e) => {
                        e.preventDefault();
                        setShowMenu(true);
                        // setShowLines(false);
                        // setShowCross(true);
                    }}/>
        }
    </div> 
*/}