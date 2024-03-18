import imageUrlBuilder from '@sanity/image-url'

type ImageRecord = {
    asset: Record<string, any>;
    crop?: {
        bottom: number;
        left: number;
        right: number;
        top: number;
        _type: 'sanity.imageCrop'        
    };
    hotspot?: {
        height: number;
        width: number;
        x: number;
        y: number;
        _type: 'sanity.imageHotspot'
    };
}

/**
 * Creates a single Sanity image CDN URL based on a image record.
 */
export const useSanityImage = (record: ImageRecord) => {
    const { config } = useSanity()
    const builder = imageUrlBuilder({
        projectId: config.projectId,
        dataset: config.dataset || 'production'
    })
    return builder.image(record).url()
} 