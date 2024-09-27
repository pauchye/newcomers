'use server'
import * as fs from 'fs'
import Image from 'next/image'

const galleryFilenames: string[] = fs.readdirSync(`./public/images/events/`)
const GALLERY_MAP: Record<string, string[]> = {}

galleryFilenames.forEach(item => {
    if (fs.lstatSync(`./public/images/events/${item}`).isDirectory() ) {
        GALLERY_MAP[item] = fs.readdirSync(`./public/images/events/${item}`)
    }
})

const GalleryPage = async ({ eventName }: {eventName: string}) => {
    return (
            <div className='my-6'>             
                <Gallery  eventName={eventName}/>
            </div>
    );
};

const Gallery = ({ eventName }: { eventName: string }) => {
    const imageArray = GALLERY_MAP[eventName]
    return <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {imageArray && imageArray.map((el: string) => <Image  width={400} height={400} alt={'alt'} src={`/images/events/${eventName}/${el}`} key={el} />)}
    </div>
}

export default GalleryPage;