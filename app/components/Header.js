import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import Link from 'next/link'

import { Button } from "@/components/ui/button"

function Header() {

  return (
    <header className='h-[12vh] scroll-smooth w-[100vw] bg-white border flex justify-between items-center pl-5 pr-5 top-0 fixed z-10 shadow-lg '>
        <Image src={logo} alt="Picture of the author" className=' h-5/6 w-auto ' />
        <div className=' h-5/6 w-3/5 flex justify-evenly items-center '>
        <Link href='/#aboutus' className='hover:'>About Us</Link>
        <Link href='/#story'>Stories</Link>
        <Link href='/#projects'>Our Projects</Link>
        <Link href='/#sponsor'>Sponsors</Link>
        <Link href='/#events'>Events</Link>
        <Link href='/#contact'>Contact Us</Link>
        <Link href='/teams'>Our Team</Link>
        <Button className='bg-amber-400 color-black'>Volunteer!</Button>
        </div>
    </header>
  )
}

export default Header
