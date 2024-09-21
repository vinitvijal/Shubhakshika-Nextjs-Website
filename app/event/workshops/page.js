import VideoEmbed from '@/app/components/VideoEmbed';
import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'AWARE OF THE FIRE SAFETY RULES',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/fire1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/fire2.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/3b6ikh?" />, // Single video for this event
    description: 'On 20th May 2023 the children were taken to the Fire Station where they were made aware of the fire safety rules and procedures.'
  },
  {
    title: 'WELFARE PROGRAM',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare3.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/welfare4.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/bpszvk?" />, // Single video for this event
    description: 'On the 10th day of September 2022, Shubhakshika organized a child welfare program at its Amar Jyoti Colony, Rohini Sector-16 campus to give a detailed knowledge to its beneficiaries about child rights, care, protection, health and safety (unlawful sexual practices). click here for report.'
  },
  {
    title: 'BAL CHETNA SHIVIR',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture22.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture23.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/lgkv0i?" />, // Single video for this event
    description: 'A team of volunteers from Art of Living conducted Bal Chetna Shivir at our de-addiction center from June 6-9, 2022. The program included, besides fun events, yoga sessions and awareness sessions to make the children aware about health, composition of human body and the hazards associated with unhygienic living conditions and unhealthy lifestyle. The children responded very well to this sensitization through informal interaction and thoroughly enjoyed. We are grateful to the AOL team for bestowing their love and blessings on the children at Shubhakshika.'
  },
  {
    title: 'LAUGHTER CLUB',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter1.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter2.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter3.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/laughter4.jpeg'
    ],
    video: <VideoEmbed src="https://streamable.com/e/5oandw?" />, // Single video for this event
    description: ''
  }
];

const Page = () => {
  return (
    <div className='h-screen w-full pt-32 overflow-x-hidden'>
      <div className='flex flex-col md:justify-center justify-start items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='md:text-6xl text-4xl font-bold'>Workshops</h1>
          <Separator className='w-screen bg-neutral-300' />
        </div>

        {eventData.map((event, index) => (
          <div key={index} className='pt-10 flex flex-col justify-center items-start ml-20 gap-10'>
            <h2 className='md:text-4xl text-2xl md:w-full w-3/4 font-semibold md:text-center md:mx-auto'>{event.title}</h2>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-2'>
              {event.images.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className='w-[300px] h-[200px] bg-black'>
                    <img src={imageUrl} alt={`image-${imageIndex}`} className='object-cover h-full w-full' />
                </div>
              ))}
            </div>
            <div className=''>{event.video}</div>
            <p className='md:text-center max-w-2xl md:px-0 px-4 md:mx-auto md:w-full w-3/4'>{event.description}</p>
            <Separator className='w-screen bg-neutral-300' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page