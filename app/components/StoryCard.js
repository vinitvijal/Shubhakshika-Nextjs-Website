import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';

export default function StoryCard({title, description }) {
    return (
        <Card className="flex h-[24vh] justify-center items-center">
            <div className='w-1/3 flex justify-center items-center'>
                <img src="https://cdn.pixabay.com/photo/2013/07/12/18/38/avatar-153605_1280.png" className='w-fit object-cover' alt={title} />
            </div>
            <CardContent className='w-2/3 h-[80%]'>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="h-[100%] mt-2 overflow-auto">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}