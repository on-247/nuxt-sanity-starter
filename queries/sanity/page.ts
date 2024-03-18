import {groq} from '#imports'
import {PAGE} from './fragments/pages/page'

export const PAGE_QUERY = groq`
    *[_type == 'page' && slug.current == $slug]{
        ${PAGE}
    }[0]
`