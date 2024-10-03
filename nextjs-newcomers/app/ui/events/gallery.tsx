'use client'
// import { useState, useEffect } from 'react'
import Image from 'next/image'
// import { getGalleryImagesArray } from '../../lib/helpers'

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
        case 'happyhour':
            return [
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/1.jpg`} key={0} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/2.jpg`} key={1} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/3.jpg`} key={2} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/4.jpg`} key={3} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/5.jpg`} key={4} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/6.jpg`} key={5} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/7.jpg`} key={6} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/8.jpg`} key={7} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/9.jpg`} key={8} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/10.jpg`} key={9} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/11.jpg`} key={10} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/12.jpg`} key={11} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/13.jpg`} key={12} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/14.jpg`} key={13} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/15.jpg`} key={14} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/16.jpg`} key={15} />,
                <Image  width={400} height={400} alt={'alt'} src={`/images/events/happyhour/17.jpg`} key={16} />,
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
        case 'happyhour':
            return <div>
Pictures by <a href='https://www.instagram.com/cherryhe21/' className="hover:underline text-blue-600">Cherry He</a>
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