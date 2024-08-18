'use client'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'

import Loading1 from '../../assets/july-images/home1.jpeg'
import Loading2 from '../../assets/july-images/ImageNew5.jpeg'
import Loading3 from '../../assets/july-images/ImageNew2.jpeg'


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
                <Image src={Loading3} className='w-[100vw] h-[90vh] object-cover opacity-75  brightness-100 saturate-75' alt='qa'/>
            </CarouselItem>
            <CarouselItem className='w-[100vw]'>
                <Image src={Loading1} className='w-[100vw] h-[90vh] object-cover opacity-75  brightness-100  saturate-75' alt='qa'/>
            </CarouselItem>
            <CarouselItem className='w-[100vw]'>
                <Image src={Loading2} className='w-[100vw] h-[90vh] object-cover opacity-75  brightness-100  saturate-75' alt='qa'/>
            </CarouselItem>
            
        </CarouselContent>
        </Carousel>
        <div className='absolute h-[90vh] w-[100vw] flex justify-center items-center flex-col top-0 text-white'>
        <div className=' font-bold text-9xl mb-10 bg-gradient-to-r from-red-400 to-red-400 bg-clip-text text-transparent'>
            Shubhakshika
        </div>
        <div className='  font-bold text-4xl mb-10 text-white '>
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
