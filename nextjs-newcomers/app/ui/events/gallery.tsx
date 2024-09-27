'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getGalleryImagesArray } from '../../lib/helpers'


const GalleryPage = ({ eventName }: {eventName: string}) => {
    const [imageGallery, setImageGallery] = useState<string[] | undefined>()
    useEffect(() => {
  const getPictures = async () => {
    const data = await getGalleryImagesArray()
        if (data && data[eventName]){
          setImageGallery(data[eventName])  
        };
        console.log('data', data)
  }
getPictures()
    }, [setImageGallery])
    return <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 my-6">
        {imageGallery && imageGallery.map((el: string) => <Image  width={400} height={400} alt={'alt'} src={`/images/events/${eventName}/${el}`} key={el} />)}
    </div>
};

export default GalleryPage;