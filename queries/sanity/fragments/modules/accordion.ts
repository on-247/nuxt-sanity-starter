import {groq} from '#imports'
import {MARK_DEFS} from '../portableText/markDefs'

export const MODULE_ACCORDION = groq`
    groups[]{
        _key,
        title,
        body[] {
            ...,
            markDefs[] {
                ${MARK_DEFS}
            }
        }
    }
`