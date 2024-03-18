import {groq} from '#imports'
import {MENU_LINKS} from './menuLinks'

export const FOOTER_MENU = groq`
    label,
    ${MENU_LINKS}
`