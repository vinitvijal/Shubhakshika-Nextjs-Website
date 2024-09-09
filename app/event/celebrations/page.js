import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'RAKSHABAANDHAN CELEBRATION',
    images: [
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-28-46.jpg',
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-28-51.jpg',
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-29-23.jpg',
    ],
    description: ''
  },
  {
    title: 'DIWALI CELEBRATION',
    images: [
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-33-23.jpg',
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-33-24.jpg',
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-33-31.jpg',
    ],
    description: ''
  },



  {
    title: 'INDEPENDENCE DAY CELEBRATION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/independence/i1.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/independence/i2.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/independence/i3.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/independence/i4.jpeg',
    ],
    description: 'Independence Day was celebrated at the institute with great fervour and enthusiasm. The students joyfully presented several cultural items and received gifts.',
    date: '14th August 2024',
  },
  {
    title: 'INTERNATIONAL DAY AGAINST DRUG ABUSE',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/drugabuse1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/drugabuse2.png',
    ],
    description: 'The 9th International Yoga Day celebration on 21-06-2023, with Shaheed Sukhdev College of Business Studies, Delhi.',
    date: '',
  },
  {
    title: 'YOGA DAY CELEBRATION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/yogasscbs1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/yogasscbs2.png',
    ],
    description: 'The 9th International Yoga Day celebration on 21-06-2023, with Shaheed Sukhdev College of Business Studies, Delhi.',
    date: '',
  },
  {
    title: "OCASSION OF WORLD'S LAUGHTER DAY",
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughterNew.png',
    ],
    description: '',
    date: '',
  },
  {
    title: 'DIWALI CELEBRATION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/diwali1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/diwali2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/diwali3.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/diwali4.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/diwali5.png',
    ],
    description: '',
    date: '9th November 2024',
  },
  // {
  //   title: 'INDEPENDENCE DAY',
  //   images: [
  //     'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/independence1.png',
  //     'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/independence2.png',
  //   ],
  //   description: 'The Shubhakshika family celebrated the 75th year of independence with great pomp and show. Patriotic songs, motivational street plays, folk dances and devotional music – the day was full of energy! With many esteemed guests gracing the occasion and encouraging the children, the program had a flurry of enthusiasm'
  // }
]

const Page = () => {
  return (
    <div className='h-screen w-full pt-32 overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='md:text-6xl text-4xl font-bold'>Celebrations</h1>
          <Separator className='w-screen bg-neutral-300' />
        </div>

        {eventData.map((event, index) => (
          <div key={index} className='pt-10 px-20 flex flex-col justify-center items-center gap-10'>
            <h2 className='md:text-4xl text-2xl text-center font-semibold'>{event.title}</h2>
            <div className='text-sm text-blue-600 font-semibold -mt-4'>{event.date}</div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-2'>
              {event.images.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className='w-[300px] h-[200px] bg-black'>
                  <img src={imageUrl} alt={`image-${imageIndex}`} className='object-cover h-full w-full' />
                </div>
              ))}
            </div>
            <p className='text-center max-w-2xl md:px-0 px-4'>{event.description}</p>
            <Separator className='w-screen bg-neutral-300' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page