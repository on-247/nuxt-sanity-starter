<script setup lang="ts">
import {PortableText} from '@portabletext/vue'
import {
    LinkExternal,
    LinkInternal,
    LinkAnchor,
    ModuleAccordion,
    ModuleArticle
} from '#components'

import type {
    TypeValue,
    SanityLinkInternal,
    SanityLinkExternal,
    SanityLinkAnchor,
    SanityModuleAccordion,
    SanityModuleArticle
} from '~/types'

import {CLASS_FONT_SIZES} from '~/constants'

interface Emits {
    (e: 'mounted', payload: HTMLElement): void;
}

interface Props {
    value: any;
    serializers?: any;
    flexCol?: boolean;
}

const emit = defineEmits<Emits>()
defineProps<Props>()

const defaultSerializers = {
    block: {
        h1: ({value}: TypeValue<any>, {slots}: any) => {
            return h('h1', {
                class: [CLASS_FONT_SIZES.h1]
            }, slots)
        },

        h2: ({value}: TypeValue<any>, {slots}: any) => {
            return h('h2', {
                class: [CLASS_FONT_SIZES.h2]
            }, slots)
        },

        h3: ({value}: TypeValue<any>, {slots}: any) => {
            return h('h3', {
                class: [CLASS_FONT_SIZES.h3]
            }, slots)
        },

        h4: ({value}: TypeValue<any>, {slots}: any) => {
            return h('h4', {
                class: [CLASS_FONT_SIZES.h4]
            }, slots)
        },

        h5: ({value}: TypeValue<any>, {slots}: any) => {
            return h('h5', {
                class: [CLASS_FONT_SIZES.h5]
            }, slots)
        },

        h6: ({value}: TypeValue<any>, {slots}: any) => {
            return h('h6', {
                class: [CLASS_FONT_SIZES.h6]
            }, slots)
        },

        normal: ({value}: TypeValue<any>, {slots}: any) => {
            return h('p', {
                class: [CLASS_FONT_SIZES.base]
            }, slots)
        }
    },
    list: {
        bullet: (
            {value}: TypeValue<any>,
            {slots}: any
        ) => {
            return h('ul', {
                class: [CLASS_FONT_SIZES.base, 'pl-[1.5em] flex flex-col gap-2 list-[square]']
            }, slots)
        }
    },
    marks: {
        annotationLinkExternal: (
            {value: {url, targetBlank}}: TypeValue<SanityLinkExternal>,
            {slots}: any
        ) => {
            return h(LinkExternal, {url, targetBlank}, slots)
        },

        annotationLinkInternal: (
            {value: {slug, documentType}}: TypeValue<SanityLinkInternal>,
            {slots}: any
        ) => {
            return h(LinkInternal, {
                to: slug,
                documentType: documentType,
                underline: true
            }, slots)
        },

        annotationLinkAnchor: (
            {value}: TypeValue<SanityLinkAnchor>,
            {slots}: any
        ) => {
            return h(LinkAnchor, value, slots)
        }
    },
    types: {
        'module.accordion': (
            {value: {groups}}: TypeValue<SanityModuleAccordion>
        ) => {
            return h(ModuleAccordion, {groups})
        },

        'module.article': (
            {value: {groups}}: TypeValue<SanityModuleArticle>
        ) => {
            return h(ModuleArticle, {groups})
        }
    }
}

onMounted(() => emit('mounted', getCurrentInstance()?.proxy?.$el))
</script>

<template>
    <div :class="[
        'portable-text',
        'flex', {
        'flex-col': flexCol
    }]">
        <PortableText
            :value="value"
            :components="{
                marks: {
                    ...defaultSerializers.marks,
                    ...(serializers?.marks ?? {})
                },
                block: {
                    ...defaultSerializers.block,
                    ...(serializers?.block ?? {})
                },
                types: {
                    ...defaultSerializers.types,
                    ...(serializers?.types ?? {})
                },
                list: {
                    ...defaultSerializers.list,
                    ...(serializers?.list ?? {})
                },
                listItem: serializers?.listItem
            }"
        />
    </div>
</template>