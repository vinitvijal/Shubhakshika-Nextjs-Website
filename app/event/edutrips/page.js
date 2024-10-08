import VideoEmbed from '@/app/components/VideoEmbed';
import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'TRAFFIC TRAINING PARK',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/traffic1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/traffic2.png'
    ],
    video: <VideoEmbed src="https://streamable.com/e/ul2c5x?" />,
    description: ''
  },
  {
    title: 'VISIT TO ISKCON TEMPLE, DWARKA',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/prashad1.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/prashad2.png'
    ],
    video: '',
    description: 'A visit to ISKCON temple, Dwarka on 16th May 2023. The children received a warm welcome with delicious and nutritious Prasadam, followed by dance on the beats of devotional songs, Gopi dots and health checkup for children.'
  },
  {
    title: 'TRIP TO FIRE STATION',
    images: [
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-12-54-57.jpg',
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-12-56-26.jpg'
    ],
    video: <VideoEmbed src="https://streamable.com/e/ri6a4e?" />,
    description: ''
  },
  {
    title: 'TRIP TO ZOO',
    images: [
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-02-43.jpg',
      'https://cdn.statically.io/gh/vinitvijal/images-cdn/main/workshop/PHOTO-2024-09-01-13-02-44.jpg'
    ],
    video: <VideoEmbed src="https://streamable.com/e/jj297n?" />,
    description: ''
  },
  {
    title: 'TRIP TO BHARAT DARSHAN PARK',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/bpark1.jpg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/bpark2.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/bpark3.png',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/bpark7.jpeg'
    ],
    video: '',
    description: ''
  },
  {
    title: 'TRIP TO AUROBINDO ASHRAM',
    images: [
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/ashram21.jpeg',
      'https://raw.githubusercontent.com/7sumona02/images-cdn/main/events/ashram22.jpeg'
    ],
    video: '',
    description: 'Children aged above 15 were taken tithe Aurobindo Ashram Delhi Branch on January 24, 2023 to educate them about the free vocational training programs being run by the Ashram. The children were apprised about the prospects after various courses and the admission criteria.'
  }
];

const Page = () => {
  return (
    <div className='h-screen w-full pt-32 overflow-x-hidden'>
      <div className='flex flex-col md:justify-center justify-start items-center'>
        <div className='flex flex-col gap-8 justify-center items-center'>
          <h1 className='md:text-6xl text-4xl font-bold'>Educational Trips</h1>
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