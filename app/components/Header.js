import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import Link from 'next/link'

import { Button } from "@/components/ui/button"

function Header() {

  return (
    <header className='h-[12vh] scroll-smooth w-[100vw] bg-white border flex justify-between items-center pl-5 pr-5 top-0 fixed z-10 shadow-lg '>
        <Link href='/' className=' h-5/6 w-auto '>
          <Image src={logo} alt="Picture of the author" className='h-full w-auto ' />
        </Link>
        <div className=' h-5/6 w-3/5 flex justify-evenly items-center '>
        <Link href='/#aboutus' className=' hover:border-b-yellow-400 hover:border-t-white hover:border-y-2 '>About Us</Link>
        <Link href='/#story' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2  '>Stories</Link>
        <Link href='/#projects' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2 '>Our Projects</Link>
        <Link href='/#sponsor' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2  '>Sponsors</Link>
        <Link href='/#events' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2 '>Events</Link>
        <Link href='/#contact' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2 '>Contact Us</Link>
        <Link href='/teams' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2  '>Our Team</Link>
        <Link href='/report' className='hover:border-b-yellow-400 hover:border-t-white hover:border-y-2  '>Reports</Link>
        <Button className='bg-amber-400 color-black'>Volunteer!</Button>
        </div>
    </header>
  )
}

export default Header
