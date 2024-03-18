import {groq} from '#imports'
import {HOME_PAGE} from './fragments/pages/home'

export const HOME_PAGE_QUERY = groq`
    *[_type == 'home']{
        ${HOME_PAGE}
    }[0]
`