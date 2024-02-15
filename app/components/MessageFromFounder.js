import React from 'react'
import Image from 'next/image'
import usha from '../../assets/images/team/usha.jpeg'

function MessageFromFounder() {
  return (
    <section className='h-[100vh] w-[100vw] bg-slate-100 flex justify-center items-center flex-col'>
        <div className=' text-5xl font-semibold'>Message From The Founder</div>
        <div className=' h-[60vh] w-[90vw] flex justify-evenly items-center'>
            <div className='w-1/3 relative'>
                <div className='border absolute top-10 border-black h-[50vh] w-[50vh] -left-10'></div>
                <Image src={usha} alt='mam' className='h-[50vh] w-[50vh]  relative'/>
            </div>
            <div className='w-1/2'>
                <div className=' border-t-2 border-pink-600 h-4 w-24'></div>
                <p className='text-2xl font-light'>
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
