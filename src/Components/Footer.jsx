import React from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { IoMdMailUnread } from "react-icons/io";

function Footer() {
    return (
        <div className='border-0 w-full mt-auto'>
            <ul className='flex justify-around my-5 text-4xl'>
                <li><FaFacebook /></li>
                <li><SiInstagram /></li>
                <li><FaLinkedin /></li>
                <li><IoMdMailUnread /></li>
            </ul>
        </div>
    )
}

export default Footer