import {groq} from '#imports'
import {MODULE_ACCORDION} from './modules/accordion'
import {MODULE_ARTICLE} from './modules/article'

export const MODULES = groq`
    _key,
    _type,
    (_type == "module.accordion") => {
        ${MODULE_ACCORDION}
    },
    (_type == "module.article") => {
        ${MODULE_ARTICLE}
    }
`