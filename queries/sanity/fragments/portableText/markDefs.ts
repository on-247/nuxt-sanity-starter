import {groq} from '#imports';
import {LINK_EXTERNAL} from '../linkExternal';
import {LINK_INTERNAL} from '../linkInternal';

export const MARK_DEFS = groq`
	...,
	(_type == 'annotationLinkExternal') => {
        ${LINK_EXTERNAL}
	},
	(_type == 'annotationLinkInternal') => {
        ${LINK_INTERNAL}
	}
`