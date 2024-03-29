import {groq} from '#imports'
import {MARK_DEFS} from '../portableText/markDefs'

export const MODULE_ARTICLE = groq`
    groups[]{
        _key,
        title,
        "slug": slug.current,
        body[] {
            ...,
            markDefs[]{
                ${MARK_DEFS}
            }
        }
    }
`