'use server'
import { promises as fs } from 'fs'
import path from 'path'
// import React from 'react';
import Image from 'next/image'

// const { container, main, title, grid, card } = styles

// using process.cwd() to get the path
// fs.readdir to get all files in directory
const GalleryPage = async ({ eventName }: {eventName: string}) => {
    const imageDirectory = path.join(process.cwd(), `/public/images/events/${eventName}`);
    const imageFilenames = await fs.readdir(imageDirectory)

    return (
            <div className='my-6'>             
                <Gallery images={imageFilenames} eventName={eventName}/>
            </div>
    );
};

const Gallery = ({ images, eventName }: { images: Array<string>; eventName: string }) => {
    return <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {images.map((el: string) => <Image  width={400} height={400} alt={'alt'} src={`/images/events/${eventName}/${el}`} key={el} />)}
    </div>
}

export default GalleryPage;