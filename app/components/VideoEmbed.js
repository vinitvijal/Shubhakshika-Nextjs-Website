import React from 'react';

const VideoEmbed = ({src}) => {
    return (
        <div className='w-[300px] h-[200px] bg-black'>
            <iframe
                allow="fullscreen"
                allowFullScreen
                height="100%"
                src={src}
                width="100%"
                className='object-cover h-full w-full'
            ></iframe>
        </div>
    );
};

export default VideoEmbed;