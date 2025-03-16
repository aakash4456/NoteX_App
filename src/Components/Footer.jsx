import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
    return (
        // <footer className="w-full bg-white border-t-3 border-t-blue-950 py-4 mt-auto">
        <footer className="w-full bg-white py-4 mt-auto">
            {/* Social Icons */}
            <ul className="flex justify-center gap-6 text-2xl text-gray-500">
                <li>
                    <a href="https://github.com/aakash4456" target="_blank" rel="noopener noreferrer" 
                    className="cursor-pointer hover:text-red-700 transition duration-300">
                        <FaSquareGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aakash4456/" target="_blank" rel="noopener noreferrer" 
                    className="cursor-pointer hover:text-blue-950 transition duration-300">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                    <a href="mailto:aakash4456bhu@gmail.com" 
                    className="cursor-pointer hover:text-red-700 transition duration-300">
                        <IoMdMailUnread />
                    </a>
                </li>
            </ul>
            {/* Copyright Notice */}
            <p className="text-center text-sm text-gray-400 mt-3">
                ⚡ Powered by curiosity & caffeine ☕
            </p>
        </footer>
    );
}

export default Footer;
