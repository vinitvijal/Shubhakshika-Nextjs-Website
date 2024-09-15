"use client"
 
import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import Link from 'next/link'

import { Button } from "@/components/ui/button"

function Header() {
  const toggleMenu = () => {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };
  return (
    <div>
      <nav className="h-[12vh] scroll-smooth w-[100vw] bg-white flex flex-wrap items-center justify-between  top-0 fixed z-10 shadow-lg">
        <Link href='/' className=' h-5/6 w-auto pl-5'>
          <Image src={logo} alt="Picture of the author" className='h-full w-auto ' />
        </Link>
      <div className="flex md:hidden pr-5">
        <button id="hamburger" onClick={toggleMenu}>
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" />
        </button>
      </div>
      <div className="toggle hidden w-full md:w-auto md:flex md:justify-evenly text-right text-sm -mt-2 md:mt-0 border-t-2 border-black md:border-none p-5 bg-white md:bg-transparent">
        <Link href='/#aboutus' className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">About Us</Link>
        <Link href='/#story' className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">Stories</Link>
        <Link href="/#projects" className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">Our Projects</Link>
        <Link href="/#sponsor" className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">Sponsors</Link>
        <Link href="/#events" className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">Events</Link>
        <Link href="/#contact" className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">Contact</Link>
        <Link href='/teams' className="block md:inline-block text-black hover:text-yellow-400 px-4 py-3 border-b-2 border-black md:border-none">Our Team</Link>
        <div className='mt-2 md:mt-1'><Link href="#" className="block md:inline-block w-full md:w-auto px-4 py-2 text-right bg-yellow-400 hover:bg-yellow-400/90 text-white rounded-lg font-semibold text-sm">Volunteer!</Link></div>
      </div>
    </nav>
    </div>
  )
}

export default Header