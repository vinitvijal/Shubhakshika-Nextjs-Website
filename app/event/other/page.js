import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'DISTRIBUTION OF SCHOOL UNIFORMS TO CHILDREN',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/uniform1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/uniform2.png'
    ],
    description: ''
  },
  {
    title: 'DISTRIBUTION OF BAG AND BOTTLES TO OUR STUDENTS',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/hitachi1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/hitachi2.png'
    ],
    description: ''
  },
  {
    title: 'COUNCELLOR VISIT FROM ISKON',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture51.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture52.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture61.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture62.png',
    ],
    description: 'Counselors from ISKCON have been spending time with our children in an attempt to bring peace and joy in their lives.'
  },
  {
    title: 'ISKCON MEAL',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/iskcon/is1.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/iskcon/is2.jpeg',
    ],
    description: 'Our children are nourished by Lord Krishna’s blessings through their daily meals provided by His devotees. We are grateful to ISKCON Dwarka for blessing our children with a wholesome lunch everyday. Children take turns to serve the food in a hygienic way.'
  },
  {
    title: 'HUDCO PAINTING COMPETITION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/painting1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/painting2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/painting3.png',
    ],
    description: 'A team from Shubhakshika participated in the Hudco painting competition on August 30, 2022'
  }
]

const Page = () => {
  return (
    <div className='h-screen w-full pt-32'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='text-6xl font-bold te'>Other</h1>
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