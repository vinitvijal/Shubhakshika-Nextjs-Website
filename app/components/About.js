import React from 'react'
import Image from 'next/image'
import silai from '../../assets/images/7th.jpeg'
import home from '../../assets/july-images/home1.jpeg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <section className='h-[200vh] w-[100vw] flex flex-col justify-center items-center md:mb-0 mb-40' id='aboutus'>
      <div className=' md:text-5xl text-3xl font-semibold text-center my-10'>About Us</div>
      <div className='h-[60vh] w-full max-w-[1500px] flex md:flex-row flex-col justify-between items-center md:mb-0 mb-20'>
        <div className='md:w-2/5 w-[95vw] h-full  flex justify-center items-center '>
            <Image src={home} alt='img' className='h-4/5 object-cover rounded-e-xl'/>
        </div>
        <div className='md:w-3/5 w-full h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center md:text-5xl text-3xl font-semibold mb-3 drop-shadow-lg'>Who are We?</p>
            <p className=' md:text-xl text-normal font-light md:text-left text-center '>Shubhakshika Educational Society is an NGO working relentlessly to mitigate the sufferings of the underprivileged and deprived sections of society, and plant the seeds of hope in their lives. Shubhakshika Educational Society is registered with Niti Ayog (Unique Id: DL/2018/081211). It has 12 A, 80G and Govt of India approval for CSR. Its Education Center (OBE 027003) is accredited with the National Institute of Open Schooling for certified Open Basic Education.</p>
        </div>
      </div>
      <div className='h-[60vh] w-full max-w-[1500px] flex flex-col-reverse md:flex-row  justify-between items-center md:pt-0 pt-60'>
        <div className='md:w-3/5 w-full h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center md:text-5xl text-3xl font-semibold mb-3 drop-shadow-lg'>Our Origin</p>
            <p className=' md:text-xl text-normal font-light md:text-left text-center '>The NGO was established in June 1993 under the Societies Act of 1860 by academicians (including some professors from constituent colleges of Delhi University, school teachers), professionals and others committed to social causes. Since then, the ngo has been working for the upliftment of the underprivileged and marginalized sections of society.
            </p>
            <Link href='/teams' className='md:absolute md:left-12 md:mt-[44vh]'><Button className="bg-blue-400">Our Team</Button></Link>
        </div>
        <div className='md:w-2/5 w-[95vw] h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className=' object-cover  h-4/5 rounded-s-xl'/>
        </div>
      </div>
      <div className='h-[60vh] w-full max-w-[1500px] flex md:flex-row flex-col justify-between items-center md:pt-0 pt-10 md:mb-0 mb-40'>
        <div className='md:w-2/5 w-[95vw] h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className='h-4/5 object-cover  rounded-e-xl'/>
        </div>
        <div className='md:w-3/5 w-full h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center md:text-5xl text-3xl font-semibold mb-3 drop-shadow-lg'>Vision and Mission</p>
            <p className=' md:text-xl text-lg font-light md:text-left text-center '>Integrated and holistic development of the underprivileged sections of society:</p>
            <ul className=" list-disc md:text-xl text-normal md:text-left font-light ml-6 md:-mt-10 mt-0">
              <li className="">To empower and integrate the marginalized sections into the mainstream of society through education (formal/non formal/certified OBE - NIOS) skill training.              </li>
              <li className="">Social, economic, and emotional rehabilitation of women and children in vulnerable situations such as domestic abuse, substance abuse, beggary, crime, etc.              </li>
              <li className="">Healthcare for the needy.              </li>
            </ul>
            
        </div>
      </div>
    </section>
  )
}
