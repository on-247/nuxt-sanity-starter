import {groq} from '#imports'
import {PAGE_SECTION} from '../pageSection'
import {SEO} from '../seo'

export const HOME_PAGE = groq`
    sections[]{
        ${PAGE_SECTION}
    },
    seo{
        ${SEO}
    }
`