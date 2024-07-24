import { Separator } from '@/components/ui/separator'
import React from 'react'

const eventData = [
  {
    title: 'INDEPENDENCE DAY CELEBRATION',
    images: [
      '/events/e5.png',
      '/events/e6.png'
    ],
    description: 'Independence Day was celebrated at the institute with great fervour and enthusiasm. The students joyfully presented several cultural items and received gifts.'
  },
  {
    title: 'INTERNATIONAL DAY AGAINST DRUG ABUSE',
    images: [
      '/events/e7.png',
      '/events/e8.png'
    ],
    description: 'The 9th International Yoga Day celebration on 21-06-2023, with Shaheed Sukhdev College of Business Studies, Delhi.'
  },
  {
    title: 'TRAFFIC TRAINING PARK',
    images: [
      '/events/e9.png',
      '/events/e10.png'
    ],
    description: ''
  },
  {
    title: 'YOGA DAY CELEBRATION',
    images: [
      '/events/e11.png',
      '/events/e12.png'
    ],
    description: 'The 9th International Yoga Day celebration on 21-06-2023, with Shaheed Sukhdev College of Business Studies, Delhi.'
  },
  {
    title: 'AWARE OF THE FIRE SAFETY RULES',
    images: [
      '/events/e13.png',
      '/events/e14.png'
    ],
    description: 'On 20th May 2023 the children were taken to the Fire Station where they were made aware of the fire safety rules and procedures.'
  },
  {
    title: 'VISIT TO ISKCON TEMPLE, DWARKA',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'A visit to ISKCON temple, Dwarka on 16th May 2023. The children received a warm welcome with delicious and nutritious Prasadam, followed by dance on the beats of devotional songs, Gopi dots and health checkup for children.'
  },
  {
    title: 'DISTRIBUTION OF SCHOOL UNIFORMS TO CHILDREN',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: "OCASSION OF WORLD'S LAUGHTER DAY",
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: 'DISTRIBUTION OF BAG AND BOTTLES TO OUR STUDENTS',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: 'TRIP TO CHILDREN TRAFFIC PARK',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: 'TRIP TO BHARAT DARSHAN PARK',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: 'TRIP TO AUROBINDO ASHRAM',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'Children aged above 15 were taken tithe Aurobindo Ashram Delhi Branch on January 24, 2023 to educate them about the free vocational training programs being run by the Ashram. The children were apprised about the prospects after various courses and the admission criteria.'
  },
  {
    title: 'DIWALI CELEBRATION',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: 'COUNCELLOR VISIT FROM ISKON',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'Counselors from ISKCON have been spending time with our children in an attempt to bring peace and joy in their lives.'
  },
  {
    title: 'ISKON MEAL',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'Our children are nourished by Lord Krishna’s blessings through their daily meals provided by His devotees. We are grateful to ISKCON Dwarka for blessing our children with a wholesome lunch everyday. Children take turns to serve the food in a hygienic way.'
  },
  {
    title: 'WELFARE PROGRAM',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'On the 10th day of September 2022, Shubhakshika organized a child welfare program at its Amar Jyoti Colony, Rohini Sector-16 campus to give a detailed knowledge to its beneficiaries about child rights, care, protection, health and safety (unlawful sexual practices). click here for report.'
  },
  {
    title: 'INDEPENDENCE DAY',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'The Shubhakshika family celebrated the 75th year of independence with great pomp and show. Patriotic songs, motivational street plays, folk dances and devotional music – the day was full of energy! With many esteemed guests gracing the occasion and encouraging the children, the program had a flurry of enthusiasm'
  },
  {
    title: 'BAL CHETNA SHIVIR',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'A team of volunteers from Art of Living conducted Bal Chetna Shivir at our de-addiction center from June 6-9, 2022. The program included, besides fun events, yoga sessions and awareness sessions to make the children aware about health, composition of human body and the hazards associated with unhygienic living conditions and unhealthy lifestyle. The children responded very well to this sensitization through informal interaction and thoroughly enjoyed. We are grateful to the AOL team for bestowing their love and blessings on the children at Shubhakshika.'
  },
  {
    title: 'HUDCO PAINTING COMPETITION',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'A team from Shubhakshika participated in the Hudco painting competition on August 30, 2022'
  },
  {
    title: 'LAUGHTER CLUB',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: ''
  },
  {
    title: 'AUROBINDO ASHRAM VISIT',
    images: [
      '/events/e15.png',
      '/events/e16.png'
    ],
    description: 'A team of children from Shubhakshika visited the Aurobindo Ashram, Delhi branch on September 8, 2022. The children watched a movie about the freedom struggle of India, sung devotional songs and listened to stories with embedded moral messages. The trip ended with lunch in the dining hall along with the Ashram residents. A picture of children taking a tour of the Ashram with Dr. Ramesh Bijlani, an educationist, medical scientist, writer and inspirational speaker, who stays and works at the Ashram.'
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