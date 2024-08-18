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
        <Card className="flex h-[25vh] justify-center items-center">
            <div className='w-1/3 flex justify-center items-center'>
                <Image src="/avatar.jpg" width={40} height={40} className='w-[80%]' alt={title} />
            </div>
            <CardContent className='w-2/3 h-[80%]'>
                <CardTitle>{title}</CardTitle>
                <CardDescription className="h-[100%] overflow-auto">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}