import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'AWARE OF THE FIRE SAFETY RULES',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/fire1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/fire2.png'
    ],
    description: 'On 20th May 2023 the children were taken to the Fire Station where they were made aware of the fire safety rules and procedures.'
  },
  {
    title: 'WELFARE PROGRAM',
    images: [
       'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare3.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare4.png',
    ],
    description: 'On the 10th day of September 2022, Shubhakshika organized a child welfare program at its Amar Jyoti Colony, Rohini Sector-16 campus to give a detailed knowledge to its beneficiaries about child rights, care, protection, health and safety (unlawful sexual practices). click here for report.'
  },
  {
    title: 'BAL CHETNA SHIVIR',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture22.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture23.png',
    ],
    description: 'A team of volunteers from Art of Living conducted Bal Chetna Shivir at our de-addiction center from June 6-9, 2022. The program included, besides fun events, yoga sessions and awareness sessions to make the children aware about health, composition of human body and the hazards associated with unhygienic living conditions and unhealthy lifestyle. The children responded very well to this sensitization through informal interaction and thoroughly enjoyed. We are grateful to the AOL team for bestowing their love and blessings on the children at Shubhakshika.'
  },
  {
    title: 'LAUGHTER CLUB',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter1.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter2.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter3.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter4.jpeg',
    ],
    description: ''
  }
]

const Page = () => {
  return (
    <div className='h-screen w-full pt-32'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='text-6xl font-bold te'>Workshops</h1>
          <Separator className='w-screen bg-neutral-300' />
        </div>

        {eventData.map((event, index) => (
          <div key={index} className='pt-10 px-20 flex flex-col justify-center items-center gap-10'>
            <h2 className='text-4xl font-semibold'>{event.title}</h2>
            <div className='grid grid-cols-4 gap-2'>
              {event.images.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className='w-[300px] h-[200px] bg-black'>
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