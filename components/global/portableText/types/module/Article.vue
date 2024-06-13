<script setup lang="ts">
import type {SanityModuleArticle} from '~/types'
import {CLASS_FONT_SIZES} from '~/constants'

defineProps<SanityModuleArticle>()

const serializers = {
    block: {
        h1: (value: any, {slots}: any) => h('h1', {
            class: [CLASS_FONT_SIZES.h1, 'font-medium mb-4 last:mb-0 mt-12 first:mt-0']
        }, slots),
        h2: (value: any, {slots}: any) => h('h2', {
            class: [CLASS_FONT_SIZES.h2, 'font-medium mb-4 last:mb-0 mt-12 first:mt-0']
        }, slots),
        h3: (value: any, {slots}: any) => h('h3', {
            class: [CLASS_FONT_SIZES.h3, 'font-medium mb-4 last:mb-0 mt-12 first:mt-0']
        }, slots),
        h4: (value: any, {slots}: any) => h('h4', {
            class: [CLASS_FONT_SIZES.h4, 'font-medium mb-4 last:mb-0 mt-12 first:mt-0']
        }, slots),
        h5: (value: any, {slots}: any) => h('h5', {
            class: [CLASS_FONT_SIZES.h5, 'font-medium mb-4 last:mb-0 mt-12 first:mt-0']
        }, slots),
        h6: (value: any, {slots}: any) => h('h6', {
            class: [CLASS_FONT_SIZES.h6, 'font-medium mb-4 last:mb-0 mt-12 first:mt-0']
        }, slots),
        normal: (value: any, {slots}: any) => h('p', {
            class: [CLASS_FONT_SIZES.base, 'mb-4 last:mb-0']
        }, slots)
    },
}
</script>

<template>
    <div class="flex flex-col lg:flex-row">
        <div class="relative lg:sticky lg:top-[80px] w-full h-full lg:max-w-[280px] lg:mr-24">
            <nav class="w-full flex flex-col divide-y divide-gray/[.1] mb-12 bg-white">
                <div class="font-medium mb-3">Op deze pagina:</div>
                <a
                    v-for="{title, slug} in groups"
                    :href="`#${slug}`"
                    class="py-3 pl-4 text-gray hover:text-black"
                    @click.prevent="useScroll().to(`#${slug}`)"
                >
                    {{ title }}
                </a>
            </nav>
        </div>
        <article class="w-full flex flex-col gap-12">
            <div
                v-for="group in groups"
                :id="group.slug"
            >
                <PortableText
                    :serializers="serializers"
                    :value="group.body"
                    flex-col
                />
            </div>
        </article>
    </div>
</template>