import VideoEmbed from '@/app/components/VideoEmbed'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'DISTRIBUTION OF SCHOOL UNIFORMS TO CHILDREN',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/uniform1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/uniform2.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/x8lf4i?" />, // No video for this event  
    description: ''
  },
  {
    title: 'DISTRIBUTION OF BAG AND BOTTLES TO OUR STUDENTS',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/hitachi1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/hitachi2.png'
    ],
    video: <VideoEmbed src="https://player.vimeo.com/video/1008510063?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" />, // No video for this event
    description: ''
  },
  {
    title: 'COUNCELLOR VISIT FROM ISKON',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture51.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture52.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture61.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/Picture62.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/bpgi7d?" />,  // Video component for this event
    description: 'Counselors from ISKCON have been spending time with our children in an attempt to bring peace and joy in their lives.'
  },
  {
    title: 'ISKCON MEAL',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/iskcon/is1.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/iskcon/is2.jpeg'
    ],
    video: <VideoEmbed src="https://streamable.com/e/wq16r0?" />,  // Video component for this event
    description: 'Our children are nourished by Lord Krishna’s blessings through their daily meals provided by His devotees. We are grateful to ISKCON Dwarka for blessing our children with a wholesome lunch every day. Children take turns to serve the food in a hygienic way.'
  },
  {
    title: 'HUDCO PAINTING COMPETITION',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/painting1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/painting2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/painting3.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/g4vmy3?" />, // No video for this event
    description: 'A team from Shubhakshika participated in the Hudco painting competition on August 30, 2022.'
  }
];

const Page = () => {
  return (
    <div className='h-screen w-full pt-32 overflow-x-hidden'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='md:text-6xl text-4xl font-bold'>Other</h1>
          <Separator className='w-screen bg-neutral-300' />
        </div>

        {eventData.map((event, index) => (
          <div key={index} className='pt-10 flex flex-col justify-center items-start ml-20 gap-10'>
            <h2 className='md:text-4xl text-2xl font-semibold text-center mx-auto'>{event.title}</h2>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-2'>
              {event.images.map((imageUrl, imageIndex) => (
                <div key={imageIndex} className='w-[300px] h-[200px] bg-black'>
                  <img src={imageUrl} alt={`image-${imageIndex}`} className='object-cover h-full w-full' />
                </div>
              ))}
            </div>
            <div className=''>{event.video}</div>
            <p className='text-center max-w-2xl md:px-0 px-4 mx-auto'>{event.description}</p>
            <Separator className='w-screen bg-neutral-300' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page