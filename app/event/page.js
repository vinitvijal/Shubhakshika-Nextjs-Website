import React from 'react';
import Card from './Card';

const cardData = [
    {
        title: 'Educational Trips',
        src: '/events/e9.png',
        description: 'Explore new places and learn through experience!',
        link: '/event/edutrips'
    },
    {
        title: 'Celebrations',
        src: '/events/e8.png',
        description: 'Join our exciting workshops to enhance your skills!',
        link: '/event/celebrations'
    },
    {
        title: 'Workshops',
        src: '/events/e7.png',
        description: 'Join our exciting workshops to enhance your skills!',
        link: '/event/workshops'
    },
    {
        title: 'Other',
        src: '/events/e6.png',
        description: 'Explore new places and learn through experience!',
        link: '/event/other'
    }
];

const Page = () => {
    return (
        <div className='w-full h-screen'>
            <div className='flex flex-col gap-10 justify-center items-center mt-20'>
                <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                    {cardData.map((card, index) => (
                        <div key={index} className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
                            <a href={card.link}>
                                <img className="w-full" src={card.src} alt={card.title} />
                            </a>
                            <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
                                <a href={card.link} className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                                    {card.title}
                                </a>
                                <p className="text-gray-500 text-sm">
                                    {card.description}
                                </p>
                                <p className="mt-5 text-gray-600 text-xs">
                                    <a href={card.link} className="text-xs text-indigo-600 transition duration-500 ease-in-out">
                                        Visit
                                    </a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;