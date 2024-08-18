import { Button } from '@/components/ui/button'
import React from 'react'

function Donate() {
  return (
    <section className='h-[100vh] w-[100vw] bg-slate-100 flex justify-center items-center flex-col' id='#donate'>
        <div className=' text-6xl font-bold'>Donate Now!</div>
        <div className=' h-[50vh] w-[90vw] flex justify-evenly items-center'>
            <div className='w-2/5  h-[70%] flex justify-evenly items-start flex-col'>
                <p className=' text-4xl font-md font-semibold w-fit'>Sponsor a Meal</p>
                <p className=' text-lg text-zinc-600'>We are what we eat ! Nutritional deficit accounts for mental, physical & emotional distress specially among the marginalised young ones. Shubhakshika aims at holistic growth of children, so we ensure daily supply of nutritionthrough fruit and milk.</p>
                <p className=' text-xl -mt-8 font-semibold '>INR 5,000</p>

            </div>
            <div className='w-2/5   h-[70%] flex justify-evenly items-end flex-col '>
                <p className=' text-4xl font-md font-semibold w-fit'>Sponsor a Child</p>
                <p className=' text-lg text-right text-zinc-600'>Sponsor a Child for an Year! <br/>Support a child&apos;s overall development by contributing to his/her educational, medical and other basic needs.</p>
                <p className=' text-xl -mt-8 font-semibold '>INR 15,000</p>
            </div>
        </div>
        <Button className=" p-5 h-[4rem] px-[4rem] text-lg rounded-xl" >Donate Now!</Button>
    </section>
  )
}

export default Donate
