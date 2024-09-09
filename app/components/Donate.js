import { Button } from '@/components/ui/button'
import React from 'react'

function Donate() {
  return (
    <section className='h-[100vh] w-[100vw] bg-slate-100 flex justify-center items-center flex-col' id='#donate'>
        <div className=' md:text-6xl text-4xl font-bold'>Donate Now!</div>
        <div className=' h-[50vh] w-[90vw] flex md:flex-row flex-col md:gap-0 gap-4 justify-evenly items-center md:mt-0 mt-10'>
            <div className='md:w-2/5 w-full  h-[70%] flex justify-evenly items-start flex-col'>
                <p className=' md:text-4xl text-2xl font-md font-semibold w-fit'>Sponsor a Meal</p>
                <p className=' md:text-lg text-normal text-zinc-600'>We are what we eat ! Nutritional deficit accounts for mental, physical & emotional distress specially among the marginalised young ones. Shubhakshika aims at holistic growth of children, so we ensure daily supply of nutritionthrough fruit and milk.</p>
                <p className=' text-xl -mt-3  font-semibold  md:mt-0'>INR 5,000</p>

            </div>
            <div className='md:w-2/5 w-full   h-[70%] flex justify-evenly items-end flex-col '>
                <p className=' md:text-4xl text-2xl font-md font-semibold w-fit'>Sponsor a Child</p>
                <p className=' md:text-lg text-normal text-right text-zinc-600'>Sponsor a Child for an Year! <br/>Support a child&apos;s overall development by contributing to his/her educational, medical and other basic needs.</p>
                <p className=' text-xl -mt-3  font-semibold  md:mt-0'>INR 15,000</p>
            </div>
        </div>
        <Button className=" p-5 h-[4rem] px-[4rem] text-lg rounded-xl" >Donate Now!</Button>
    </section>
  )
}

export default Donate
