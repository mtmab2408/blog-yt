import React from 'react'
import logo from '../assets/logo.png'
import { IoLogoYoutube } from "react-icons/io5";
function Header() {
  return (
    <div className='flex justify-between items-center p-2'>
        <img src={logo} className='w-[100px]' />
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About Us</li>
            <li className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        <button className='bg-black rounded-full text-white flex items-center'>Subscribe<IoLogoYoutube className='ml-3 text-[20px]'/></button>
    </div>
  )
}

export default Header