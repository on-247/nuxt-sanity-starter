<script setup lang="ts">
import {PortableText} from '@portabletext/vue'
import {CLASS_FONT_SIZES} from '~/constants'

type TypeValue<T> = {
    value: T;
}

interface Emits {
    (e: 'mounted', payload: HTMLElement): void;
}

interface Props {
    value: any;
    serializers?: any;
    flexCol?: boolean;
    wrapped?: boolean;
}

const emit = defineEmits<Emits>()
withDefaults(
    defineProps<Props>(), {
    wrapped: true
})
const portableText = usePortableText()

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
    marks: portableText.marks,
    types: portableText.types
}

onMounted(() => emit('mounted', getCurrentInstance()?.proxy?.$el))
</script>

<template>
    <div
        v-if="wrapped"
        :class="[
            'portable-text',
            'flex', {
            'flex-col': flexCol
        }]"
    >
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
    <PortableText
        v-else
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
</template>