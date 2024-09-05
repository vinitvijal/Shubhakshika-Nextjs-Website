import React from 'react'
import Image from 'next/image'
import usha from '../../assets/images/team/usha.jpeg'

function MessageFromFounder() {
  return (
    <section className='h-[100vh] w-[100vw] bg-slate-100 flex justify-center items-center flex-col'>
        <div className=' md:text-5xl font-semibold text-3xl'>Message From The Founder</div>
        <div className=' h-[60vh] w-[90vw] flex md:flex-row flex-col justify-evenly items-center'>
            <div className='w-1/3 relative md:mt-0 mt-14'>
                <div className='border absolute top-10 border-black md:h-[50vh] md:w-[50vh] h-56 w-full -left-10'></div>
                <Image src={usha} alt='mam' className='md:h-[50vh] md:w-[50vh] h-56 w-full relative'/>
            </div>
            <div className='md:w-1/2 md:text-left text-center md:mt-0 mt-20'>
                <div className=' border-t-2 border-pink-600 h-4 w-24'></div>
                <p className='md:text-2xl text-normal font-light'>
                    Nurturing is the essence of my being so naturally all children and especially those in distress and suffering are very dear to my heart. So, Immediately after my retirement from Delhi University l started to do my bit to serve many young ones in need of care . I set up Shubhakshika Educational Society to academically and socially facilitate the marginalised children. I am grateful to my team that supports me tirelessly in bringing smiles to the children who bloom and blossom in the NGO .
                </p>
                <p className='text-xl font-extralight mt-5'>
                    - Dr. Usha Bhatnagar
                </p>
            </div>
        </div>
    </section>
  )
}

export default MessageFromFounder
