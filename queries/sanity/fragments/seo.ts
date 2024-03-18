import {groq} from '#imports'
import {IMAGE} from './image'

export const SEO = groq`
    title,
    description,
    image{
        ${IMAGE}
    }
`