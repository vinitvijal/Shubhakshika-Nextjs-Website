'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import StoryCard from './StoryCard'

function SuccessStories() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000,  stopOnInteraction: true})
      )

  return (
    <section className='h-[90vh] w-[100vw] border flex justify-evenly items-center flex-col' id='story'>
        <div className=' text-5xl font-semibold'>Message From The Founder</div>
        <Carousel className='w-[90vw]' plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
            <CarouselContent className="w-[90vw]">
                <CarouselItem className="md:basis-1/2 lg:basis-1/3  border"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3"><StoryCard/></CarouselItem>
            </CarouselContent>
        </Carousel>
        <div className='w-[100vw] h-[25vh] flex justify-evenly mt-5 items-center'>
            <div className='w-1/4 h-[20vh]  flex flex-col justify-evenly'>
                <p className=' text-3xl font-md border-b-2 border-gray-300 w-fit'>Served Over</p>
                <p className=' text-2xl font-extrabold '>4800+</p>
                <p className=' text-lg'>children all over the country in need of resources</p>
            </div>
            <div className='w-1/4 h-[20vh]  flex flex-col justify-evenly'>
                <p className=' text-3xl font-md border-b-2 border-gray-300 w-fit'>Sponsor A Child</p>
                <p className=' text-lg'>children all over the country in need of resources</p>
                <Button variant="outline" className="w-1/4">Donate</Button>
            </div>
            <div className='w-1/4 h-[20vh]  flex flex-col justify-evenly'>
                <p className=' text-3xl font-md border-b-2 border-gray-300 w-fit'>Be A Volunteer</p>
                <p className=' text-lg'>Let&apos;s bring the change <br/>together</p>
                <Button variant="outline" className="w-1/4">Volunteer</Button>
            </div>
        </div>
    </section>
  )
}

export default SuccessStories
