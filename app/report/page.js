import React from 'react';
import Link from 'next/link';

const cardData = [
    {
        title: 'Annual report (2022-23)',
        src: 'https://raw.githubusercontent.com/7sumona02/images-cdn/main/illust/1410.jpg',
        description: '',
        link: '/pdf/report2.pdf'
    },
    {
        title: 'Annual report (2023-24)',
        src: 'https://raw.githubusercontent.com/7sumona02/images-cdn/main/illust/1410.jpg',
        description: '',
        link: '/pdf/report1.pdf'
    }
];

const Page = () => {
    return (
        <div className='w-full h-screen lg:my-40 my-28'>
            <div className='flex flex-col gap-10 justify-center items-center mt-20'>
                <div className="max-w-screen-xl grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto p-5 sm:p-10 md:p-16">
                    {cardData.map((card, index) => (
                        <div key={index} className="rounded overflow-hidden flex flex-col max-w-xl mx-auto ">
                            <a href={card.link}>
                                <img className="object-cover h-[300px]" src={card.src} alt={card.title} />
                            </a>
                            <div className="relative -mt-12 px-10 h-28  bg-white m-10 shadow-lg rounded-2xl  flex justify-center items-center">
                                <Link href={card.link} className="font-bold text-zinc-500 text-3xl hover:text-indigo-600 transition duration-500 ease-in-out mb-2">
                                    {card.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Page;