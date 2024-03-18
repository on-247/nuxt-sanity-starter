import {groq} from '#imports'
import {MARK_DEFS} from './markDefs'
import {MODULES} from '../modules'

export const PORTABLE_TEXT = groq`
    ${MODULES},
    ...,
    markDefs[]{
        ${MARK_DEFS}
    }
`