import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import Link from 'next/link'

import { Button } from "@/components/ui/button"

function Header() {

  return (
    <header className='h-[12vh] w-[100vw] bg-[white] border flex justify-between items-center pl-5 pr-5 top-0 fixed z-10 shadow-lg'>
        <Image src={logo} alt="Picture of the author" className=' h-5/6 w-auto ' />
        <div className=' h-5/6 w-3/5 flex justify-evenly items-center '>
        <Link href='/'>About Us</Link>
        <Link href='/'>Stories</Link>
        <Link href='/'>Our Projects</Link>
        <Link href='/'>Sponsors</Link>
        <Link href='/'>Events</Link>
        <Link href='/'>Contact Us</Link>
        <Link href='/'>Our Team</Link>
        <Button>Volunteer!</Button>
        </div>
    </header>
  )
}

export default Header
