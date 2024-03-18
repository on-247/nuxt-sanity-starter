import {groq} from '#imports'

export const LINK_INTERNAL = groq`
    _key,
    _type,
    title,
    ...reference->{
        "documentType": _type,
        (_type == "home") => {
            "slug": "/",
        },
        (_type == "page") => {
            "slug": "/" + slug.current,
        },
    }
`