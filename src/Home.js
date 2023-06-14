import React from 'react'
import background from './images/background.png'
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Home = () => {
  return (
    <div>
    <div className="relative bg-gradient-to-b from-gray-600 via-gray-700 to-gray-600">
      <img 
        src={background}
        alt="background"
        className='h-screen w-full object-cover mix-blend-overlay backdrop-opacity-10:'
      />
      <div className="absolute left-0 top-0 flex flex-col h-full w-full items-center justify-center">
        <h1 className="text center text-7xl font-normal text-teal-50 font-lato">
          Stavan Patel
        </h1>
        <div className='flex gap-5 p-5'>
        <FaLinkedinIn className= 'h-9 w-9 fill-white'/>
        <FaGithub className='h-9 w-9 fill-white'/>
        <FaTwitter className='h-9 w-9 fill-white'/>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Home