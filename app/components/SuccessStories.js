'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import StoryCard from './StoryCard';

function SuccessStories() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const stories = [
        {
            title: "Kamlesh (Name changed)",
            description: "Kamlesh faced the issue of gender identity, maybe due to his abduction by a transgender in his childhood. Kamlesh, a biological male, wanted to change due to the influence of the Transgender community who made him feel important. Kamlesh began to open up through a series of personalised and family counselling sessions. He was always told that he was free to convert but only if he actually wanted. Now Kamlesh has refused to convert and is focused on his future.",
        },
        {
            title: "Rahul (Name changed)",
            description: "Rahul was found bagging at Badli metro station. He belonged to a family of professional beggars. It was a challenge to bring the child to centre but aggressive counselling and perseverance resulted in success. The NGO could not only change the child but also convinced his family to take up a respectable job. We generated the seed money for an e-rickshaw with the help of Bharat Vikas Parishad. The boy’s father now owns and drives an e-rickshaw to earns his living.",
        },
        {
            title: "Mohit (Name changed)",
            description: "Mohit, a 17-year-old boy from the slums of Shahbad Dairy, was previously involved in drug abuse in 2023. He lives with his mother, who works in a factory, and his siblings. One brother is employed in lift repair, while another has left home. The family continues to face financial difficulties. On Friday, Mohit discovered an iPhone XR in a hospital in Rohini. He took the phone and returned it to school, where he handed it over to Mr. Gautam, the students' mobilizer. Thanks to MF's quick thinking and moral judgment, we were able to locate the phone's owner after a full day of efforts. We are proud of the positive changes Mohit has shown and his dedication to doing what is right. The following day, we honored his integrity and effort by applauding him during the school assembly, recognizing his commendable actions and boosting his morale.",
        },
        {
            title: "Monu (Name changed)",
            description: "Monu, a highly intelligent boy currently enrolled in 10th grade, was identified at the age of approximately 12-14 years while he was working as a rag picker. His father has passed away, and his mother is employed as a factory worker. Monu is suffering from cerebral palsy. He cannot use his right limbs properly. He has difficulty in walking. But he is very intelligent and is determined to make a successful career for himself. On account of his poverty he is not able to afford many essentialities. We have assisted him in obtaining his disability certificate which entitles him to a pension from the Delhi government. We wish him the best and promise to stand by him always.",
        },
        {
            title: "Anant (Name changed)",
            description: "Anant was 12 years old when he was contacted by the NGO staff in 2018. Anant had dropped out of school after Class I... ",
        },
        {
            title: "Monu (Name changed)",
            description: "Monu was found begging at the Badli railway station in 2013 by the NGO staff when he was about 10-11 years old. His daily ...",
        },
        {
            title: "Rajiv (Name changed)",
            description: "Rajiv alias Babloo was contacted by the NGO staff in Shahbad Dairy in 2015 when he was about 12 years old. Rajiv had .... ",
        },
        {
            title: "Nishtha",
            description: "a 6/7 years old girl used to beg at the Badli Railway station. She had never been to school. Dressed in filthy .... ",
        },
        {
            title: "Kajal (Name changed)",
            description: "was found roaming at Badli railway station in 2014 when she was about 9-10 years old. Her father and mother were ...",
        },
        {
            title: "Anshu (Name changed)",
            description: "Anshu, a 9 year old boy was found begging at Badli Station in 2014. He was dressed in tattered clothes and.... ",
        },
        {
            title: "Vinayak (Name changed)",
            description: "Vinayak was found roaming around in Shahbad Dairy in 2015 when he was about 12-13 years old. He had dropped out of school after Class V. The boy used... ",
        },
        {
            title: "Akshay (Name changed)",
            description: "Akshay, a 15 year old boy, unfortunately, lost his father and became the sole bread winner for his family. By the time his moth.....",
        },
        {
            title: "Vivek (Name changed)",
            description: "Vivek was separated from his parents when he was a small boy. He stayed in Children Home for Boys , Alipur, Delhi for 8 years.....",
        },
        {
            title: "Vipul (Name changed)",
            description: "Vipul is a 14-year-old boy who is a resident of Sahibabad, Daulat Pur in Delhi. He was found as a smoker and school dropout in.....",
        },
        {
            title: "Naman (Name changed)",
            description: "Naman an 8/9 year old boy was found begging at Badli station . The boy was smoking and eating tobacco. It took.... ",
        },
        {
            title: "Hemant (Name changed)",
            description: "Hemant used to beg at Railway Stations for living and was indulge in bad habits like smoking cigarettes/bidi & consumption of tobacco....",
        },
        {
            title: "Vipul (Name changed)",
            description: "Vipul is a 14-year-old boy who is a resident of Sahibabad, Daulat Pur in Delhi. He was found as a smoker and school dropout in.....",
        },
        {
            title: "Anuj (Name changed)",
            description: "Anuj was found begging on the streets by the NGO. He had no dreams other than to beg for money and consume the leftover food that was given as aims......",
        },
    ];

    return (
        <section className='h-[90vh] w-[100vw] border flex justify-evenly items-center flex-col md:pb-0 pb-20' id='story'>
            <div className='md:text-5xl text-3xl font-semibold'>Our Success Stories</div>
            <Carousel className='w-[90vw] flex justify-center' plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent className="w-[90vw]">
                    {stories.map((story, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                            <StoryCard 
                                title={story.title} 
                                description={story.description} 
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className='w-[100vw] h-[25vh] flex md:flex-row flex-col md:gap-0 gap-4 justify-evenly mt-5 items-center md:mb-0 mb-40'>
                <div className='md:w-1/4 w-full md:px-0 px-4 h-[20vh] flex flex-col justify-evenly'>
                    <p className='text-3xl font-md border-b-2 border-gray-300 w-fit'>Served Over</p>
                    <p className='text-2xl font-extrabold'>4800+</p>
                    <p className='text-lg'>children all over the country in need of resources</p>
                </div>
                <div className='md:w-1/4 w-full md:px-0 px-4 h-[20vh] flex flex-col justify-evenly'>
                    <p className='text-3xl font-md border-b-2 border-gray-300 w-fit'>Sponsor A Child</p>
                    <p className='text-lg'>children all over the country in need of resources</p>
                    <Button className='bg-amber-400 color-black w-20'>Donate</Button>
                </div>
                <div className='md:w-1/4 w-full md:px-0 px-4 h-[20vh] flex flex-col justify-evenly'>
                    <p className='text-3xl font-md border-b-2 border-gray-300 w-fit'>Be A Volunteer</p>
                    <p className='text-lg'>Let&apos;s bring the change <br />together</p>
                    <Button className='bg-amber-400 color-black w-20'>Volunteer</Button>
                </div>
            </div>
        </section>
    );
}

export default SuccessStories;