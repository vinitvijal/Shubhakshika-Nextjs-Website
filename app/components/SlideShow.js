'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { Button } from "@/components/ui/button"

import Loading1 from '../../assets/images/landing1.png'
import Loading2 from '../../assets/images/landing2.png'
import Loading3 from '../../assets/images/pic.jpeg'


function SlideShow() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
      )

  return (
    <div className='relative mt-20'>
        <Carousel   
            plugins={[plugin.current]}
            className='border h-[90vh]'
        > 
        <CarouselContent>
            <CarouselItem className='w-[100vw]'>
                <Image src={Loading3} className='w-[100vw] h-[90vh] object-cover opacity-75  brightness-100 saturate-0' alt='qa'/>
            </CarouselItem>
            <CarouselItem className='w-[100vw]'>
                <Image src={Loading1} className='w-[100vw] h-[90vh] object-cover opacity-75  brightness-100  saturate-0' alt='qa'/>
            </CarouselItem>
            <CarouselItem className='w-[100vw]'>
                <Image src={Loading2} className='w-[100vw] h-[90vh] object-cover opacity-75  brightness-100  saturate-0' alt='qa'/>
            </CarouselItem>
            
        </CarouselContent>
        </Carousel>
        <div className='absolute h-[90vh] w-[100vw] flex justify-center items-center flex-col top-0 text-white'>
        <div className=' font-bold text-9xl mb-10 text-amber-400' style={{ "text-shadow": "0px 0px  white"}}>
            Shubhakshika
        </div>
        <div className='  font-bold text-4xl mb-10 text-white ' style={{ "text-shadow": "3px 3px 10px black"}}>
            Building dreams</div>
        <div className=' h-[12vh] w-1/3 flex justify-between items-center'>
            <button className=' px-5 py-3 font-semibold text-lg bg-white text-black rounded-md w-[10rem] hover:bg-amber-400 hover:text-white'  >Donate</button>
            <button className=' px-5 py-3 font-semibold text-lg bg-white text-black rounded-md w-[10rem]  hover:bg-amber-400 hover:text-white shadow-md' >Volunteer</button>
        </div>
        </div>
    </div>

  )
}

export default SlideShow
