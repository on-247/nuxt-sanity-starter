import {groq} from '#imports'
import {PORTABLE_TEXT} from './portableText/portableText'

export const PAGE_SECTION = groq`
    paddingTop,
    anchorId,
    body[]{
        ${PORTABLE_TEXT}
    }
`