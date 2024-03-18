<script setup lang="ts">
import { PortableText } from '@portabletext/vue'

import {
    BaseLinkExternal as LinkExternal,
    BaseLinkInternal as LinkInternal,
    BaseLinkAnchor as LinkAnchor,
} from '#components'

import type {
    TypeValue,
    SanityLink,
    SanityLinkInternal,
    SanityLinkExternal,
    SanityLinkAnchor,
} from '~/types'

interface Props {
    links: SanityLink[];
    linkClass?: string | string[];
    list?: boolean;
}

const prop = defineProps<Props>()

const wrapList = (comp: any) => prop.list
    ? h('li', {class: 'flex'}, comp)
    : comp

const components = {
    types: {
        linkExternal: ({
            value: {
                title,
                url,
                targetBlank
            }
        }: TypeValue<SanityLinkExternal>) => {
            return wrapList(h(LinkExternal, {
                url,
                targetBlank,
                class: prop.linkClass
            }, () => title))
        },

        linkInternal: ({
            value: {
                title,
                slug,
                documentType
            }
        }: TypeValue<SanityLinkInternal>) => {
            return wrapList(h(LinkInternal, {
                to: slug,
                documentType: documentType,
                class: prop.linkClass
            }, () => title))
        },

        linkAnchor: ({
            value: {
                title,
                anchorId
            }
        }: TypeValue<SanityLinkAnchor>) => {
            return wrapList(h(LinkAnchor, {anchorId, class: prop.linkClass}, () => title))
        }
    }
}
</script>

<template>
    <PortableText
        :value="links"
        :components="components"
    />
</template>