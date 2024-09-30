'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getGalleryImagesArray } from '../../lib/helpers'

const getImageArray = ({ eventName }: {eventName: string}) => {
    switch (eventName) {
        case 'library':
            return [
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN1.jpg`} key={0} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN2.jpg`} key={1} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN3.jpg`} key={2} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN4.jpg`} key={3} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN5.jpg`} key={4} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN6.jpg`} key={5} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN7.jpg`} key={6} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN8.jpg`} key={7} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN9.jpg`} key={8} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/library/WNAN10.jpg`} key={9} />
            ]
        default:
            break;
    }
}

const getPhotographer = ({ eventName }: {eventName: string}) => {
    switch (eventName) {
        case 'library':
            return <div>
Pictures by <a href='https://courtneykrankallphoto.com/' className="hover:underline text-blue-600">Courtney Krankall Photography</a>
            </div>
        default:
            return <div/>

    }
}

// Courtney Krankall Photograph
const GalleryPage = ({ eventName }: {eventName: string}) => {
    const imageGallery = getImageArray({eventName})
    const photographer = getPhotographer({eventName})
    return <>
    {photographer}
    <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 my-6">
        {imageGallery && imageGallery.map((el) => el)}
    </div></>
};

export default GalleryPage;