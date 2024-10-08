'use server'
import * as fs from 'fs'
import path from 'path'


// TODO: to fix - not working with vercel as expected
export const getGalleryImagesArray = () => {
    const galDirectoryPath = path.resolve(process.cwd(), 'public', 'images', 'events');
    const galleryFilenames: string[] = fs.readdirSync(galDirectoryPath)
    const GALLERY_MAP: Record<string, string[]> = {}

galleryFilenames.forEach(item => {
    const itemPath = path.join(process.cwd(), `/public/images/events/${item}`)
    if (fs.lstatSync(itemPath).isDirectory() ) {
        GALLERY_MAP[item] = fs.readdirSync(itemPath)
    }
})
return GALLERY_MAP;
}