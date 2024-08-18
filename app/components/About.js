import React from 'react'
import Image from 'next/image'
import silai from '../../assets/images/7th.jpeg'
import home from '../../assets/july-images/home1.jpeg'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function About() {
  return (
    <section className='h-[200vh] w-[100vw] flex flex-col justify-center items-center' id='aboutus'>
      <div className=' text-5xl font-semibold text-center my-10'>About Us</div>
      <div className='h-[60vh] w-full max-w-[1500px] flex justify-between items-center'>
        <div className='w-2/5 h-full  flex justify-center items-center '>
            <Image src={home} alt='img' className='h-4/5 object-cover rounded-e-xl'/>
        </div>
        <div className='w-3/5 h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center text-5xl font-semibold mb-3 drop-shadow-lg'>Who are We?</p>
            <p className=' text-xl font-light '>Shubhakshika Educational Society is an NGO working relentlessly to mitigate the sufferings of the underprivileged and deprived sections of society, and plant the seeds of hope in their lives. Shubhakshika Educational Society is registered with Niti Ayog (Unique Id: DL/2018/081211). It has 12 A, 80G and Govt of India approval for CSR. Its Education Center (OBE 027003) is accredited with the National Institute of Open Schooling for certified Open Basic Education.</p>
        </div>
      </div>
      <div className='h-[60vh] w-full max-w-[1500px] flex justify-between items-center'>
        <div className='w-3/5 h-[80%] pb-20 flex justify-evenly flex-col px-12 relative items-center'>
            <p className=' text-center text-5xl font-semibold mb-3 drop-shadow-lg'>Our Origin</p>
            <p className=' text-xl font-light '>The NGO was established in June 1993 under the Societies Act of 1860 by academicians (including some professors from constituent colleges of Delhi University, school teachers), professionals and others committed to social causes. Since then, the ngo has been working for the upliftment of the underprivileged and marginalized sections of society.
            </p>
            <Link href='/teams' className='absolute bottom-12 left-12'><Button className="bg-blue-400">Our Team</Button></Link>
        </div>
        <div className='w-2/5 h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className=' object-cover  h-4/5 rounded-s-xl'/>
        </div>
      </div>
      <div className='h-[60vh] w-full max-w-[1500px] flex justify-between items-center'>
        <div className='w-2/5 h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className='h-4/5 object-cover  rounded-e-xl'/>
        </div>
        <div className='w-3/5 h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center text-5xl font-semibold mb-3 drop-shadow-lg'>Vision and Mission</p>
            <p className=' text-xl w-full'>Integrated and holistic development of the underprivileged sections of society:</p>
            <ul className=" list-disc text-xl font-light ml-6 -mt-10">
              <li className="">To empower and integrate the marginalized sections into the mainstream of society through education (formal/non formal/certified OBE - NIOS) skill training.              </li>
              <li className="">Social, economic, and emotional rehabilitation of women and children in vulnerable situations such as domestic abuse, substance abuse, beggary, crime, etc.              </li>
              <li className="">Healthcare for the needy.              </li>
            </ul>
            
        </div>
      </div>
    </section>
  )
}
