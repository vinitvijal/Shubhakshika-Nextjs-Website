import React from 'react'
import Image from 'next/image'
import silai from '../../assets/images/7th.jpeg'

export default function About() {
  return (
    <section className='h-[200vh] w-[100vw]' id='aboutus'>
      <div className=' text-5xl font-semibold text-center my-10'>About Us</div>
      <div className='h-[60vh] w-full flex justify-between items-center'>
        <div className='w-2/5 h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className='h-4/5 rounded-e-xl'/>
        </div>
        <div className='w-3/5 h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center text-5xl font-semibold mb-3 drop-shadow-lg'>Who are We?</p>
            <p className=' text-xl font-light '>Shubhakshika Educational Society is an NGO working relentlessly to mitigate the sufferings of the underprivileged and deprived sections of society, and plant the seeds of hope in their lives. Shubhakshika Educational Society is registered with Niti Ayog (Unique Id: DL/2018/081211). It has 12 A, 80G and Govt of India approval for CSR. Its Education Center (OBE 027003) is accredited with the National Institute of Open Schooling for certified Open Basic Education.</p>
        </div>
      </div>
      <div className='h-[60vh] w-full flex justify-between items-center'>
        <div className='w-3/5 h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center text-5xl font-semibold mb-3 drop-shadow-lg'>Our Origin</p>
            <p className=' text-xl font-light '>The NGO was established in June 1993 under Society Act of 1860 by academicians (including some professors from constituent colleges of Delhi University, school teachers), professionals and others committed to social causes and since then has been working for the upliftment of the underprivileged and marginalized sections of society through education and rehabilitation.</p>
        </div>
        <div className='w-2/5 h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className=' h-4/5 rounded-s-xl'/>
        </div>
      </div>
      <div className='h-[60vh] w-full flex justify-between items-center'>
        <div className='w-2/5 h-full  flex justify-center items-center '>
            <Image src={silai} alt='img' className='h-4/5 rounded-e-xl'/>
        </div>
        <div className='w-3/5 h-[80%] flex justify-evenly flex-col px-12 items-center'>
            <p className=' text-center text-5xl font-semibold mb-3 drop-shadow-lg'>Vision and Mission</p>
            <p className=' text-xl font-light '>We aim for the Integrated and holistic development of the underprivileged sections of society and to ensure daily nutrition, empower and integrate the marginalized sections into the mainstream of society through:</p>
            
        </div>
      </div>
    </section>
  )
}
