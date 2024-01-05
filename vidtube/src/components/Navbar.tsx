import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi" 
import { BsYoutube } from "react-icons/bs" 
import { Link } from 'react-router-dom'
// import AiOutlineSearch from 

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
        <div className="flex gap-8 items-center text-2xl">
            <div>
                <GiHamburgerMenu/>
            </div>
            <Link to="/">
                <div className="flex gap-1 items-center justify-content">
                    <BsYoutube className="text-3xl text-red-600"/>
                    <span className="text-xl font-medium">YouTube</span>
                </div>
            </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
            <form action="">
                <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
                    <div className="flex gap-4 items-center pr-5">
                        {/* <AiOutlineSearch */}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

