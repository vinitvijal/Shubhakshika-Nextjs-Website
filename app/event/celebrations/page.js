import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'INDEPENDENCE DAY CELEBRATION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/independence1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/independence2.png',
    ],
    description: 'Independence Day was celebrated at the institute with great fervour and enthusiasm. The students joyfully presented several cultural items and received gifts.'
  },
  {
    title: 'INTERNATIONAL DAY AGAINST DRUG ABUSE',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/drugabuse1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/drugabuse2.png',
    ],
    description: 'The 9th International Yoga Day celebration on 21-06-2023, with Shaheed Sukhdev College of Business Studies, Delhi.'
  },
  {
    title: 'YOGA DAY CELEBRATION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/yogasscbs1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/yogasscbs2.png',
    ],
    description: 'The 9th International Yoga Day celebration on 21-06-2023, with Shaheed Sukhdev College of Business Studies, Delhi.'
  },
  {
    title: "OCASSION OF WORLD'S LAUGHTER DAY",
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughterNew.png',
    ],
    description: ''
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
    description: ''
  },
  {
    title: 'INDEPENDENCE DAY',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/independence1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/independence2.png',
    ],
    description: 'The Shubhakshika family celebrated the 75th year of independence with great pomp and show. Patriotic songs, motivational street plays, folk dances and devotional music – the day was full of energy! With many esteemed guests gracing the occasion and encouraging the children, the program had a flurry of enthusiasm'
  }
]

const Page = () => {
  return (
    <div className='h-screen w-full pt-32'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='text-6xl font-bold te'>Celebrations</h1>
          <Separator className='w-screen bg-neutral-300' />
        </div>

        {eventData.map((event, index) => (
          <div key={index} className='pt-10 px-20 flex flex-col justify-center items-center gap-10'>
            <h2 className='text-4xl font-semibold'>{event.title}</h2>
            <div className='grid grid-cols-4 gap-2'>
              {event.images.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className='w-[300px] h-full bg-black'>
                  <img src={imageUrl} alt={`image-${imageIndex}`} className='object-cover h-full w-full' />
                </div>
              ))}
            </div>
            <p className='text-center max-w-2xl'>{event.description}</p>
            <Separator className='w-screen bg-neutral-300' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page