import {groq} from '#imports'
import {SEO} from './seo'
import {MENU_LINKS} from './menuLinks'
import {FOOTER_MENU} from './footerMenu'

export const SETTINGS = groq`
    menu{
        ${MENU_LINKS}
    },
    footerMenus[]{
        ${FOOTER_MENU}
    },
    notFoundPage,
    seo{
        ${SEO}
    }
`