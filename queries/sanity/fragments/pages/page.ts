import {groq} from '#imports'
import {PAGE_SECTION} from '../pageSection'
import {SEO} from '../seo'

export const PAGE = groq`
    title,
    "slug": slug.current,
    sections[]{
        ${PAGE_SECTION}
    },
    seo{
        ${SEO}
    }
`