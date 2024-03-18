import {groq} from '#imports'
import {LINK_EXTERNAL} from './linkExternal'
import {LINK_INTERNAL} from './linkInternal'
import {LINK_ANCHOR} from './linkAnchor'

export const MENU_LINKS = groq`
    links[]{
        (_type == "linkExternal") => {
            ${LINK_EXTERNAL}
        },
        (_type == "linkInternal") => {
            ${LINK_INTERNAL}
        },
        (_type == "linkAnchor") => {
            ${LINK_ANCHOR}
        }
    }
`