import {groq} from '#imports'
import {SETTINGS} from './fragments/settings'

export const SETTINGS_QUERY = groq`
    *[_type == 'settings']{
        ${SETTINGS}
    }[0]
`