import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-transparent absolute inset-x-0 top-0 z-10'>
        <div className='flex justify-between font-lato text-white p-4'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Me</Link>
            <Link to={"/education"}>Education</Link>
            <Link to={"/project"}>Projects</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar