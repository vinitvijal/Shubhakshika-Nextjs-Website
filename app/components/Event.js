'use client'

import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import { cards } from "@/lib/cards"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from "next/link"

const Event = () => {
  return (
    <section className='w-[100vw] h-[100vh] bg-slate-100 py-24 flex items-center justify-center flex-col' id='events'>
      <h1 className='text-center text-6xl font-bold text-black'>Events</h1>
      <section className="py-20">
            <div className="container px-96">
                <Swiper 
                    navigation
                    modules={[Navigation, Pagination]}
                    className="h-96 w-full rounded-lg"
                    loop={true}
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col h-full w-[350px] items-center justify-center border-2 border-gray-300 rounded-lg shadow-sm mx-auto">
                                <img
                                    src={card.src}
                                    alt={card.alt}
                                    className="block h-full w-full object-cover"
                                />
                                <div className="p-4">
                                <Link href={card.link}><h3 className="text-lg font-bold mb-2">{card.title}</h3></Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
        <div>
            <Link href='/event' className="text-black/50 hover:text-black text-xl hover:underline underline-offset-4 transition">More Events</Link>
        </div>
    </section>
  )
}

export default Event