'use client'

import Image from 'next/image'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';
import Link from 'next/link'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header className='h-[15vh] border flex justify-between items-center pl-5 pr-5'>
        <Image src={logo} alt="Picture of the author" className=' h-5/6 w-auto border' />
        
    </header>
  )
}

export default Header
