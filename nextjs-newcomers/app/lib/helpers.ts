'use server'
import * as fs from 'fs'

export const getGalleryImagesArray = () => {
    const galleryFilenames: string[] = fs.readdirSync(`./public/images/events/`)
    const GALLERY_MAP: Record<string, string[]> = {}

galleryFilenames.forEach(item => {
    if (fs.lstatSync(`./public/images/events/${item}`).isDirectory() ) {
        GALLERY_MAP[item] = fs.readdirSync(`./public/images/events/${item}`)
    }
})
return GALLERY_MAP;
}