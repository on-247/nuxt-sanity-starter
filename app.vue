<script setup lang="ts">
import type {TransitionProps} from 'vue';
import {SETTINGS_QUERY} from '~/queries/sanity/settings';

const scroll = useScroll({})

// @TODO: error handling
const {data} = await useSanityQuery<any>(SETTINGS_QUERY);
useState('settings', () => ({
    seo: data.value?.seo,
    menu: data.value?.menu,
    footerMenus: data.value?.footerMenus,
}));

if (data.value?.seo) {
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    });
}

usePortableTextRegister({
    types: [
        'module.accordion',
        'module.article',
        'module.form',

        'form.input',
        'form.checkbox',
        'form.radio',

        ['~portable-text.marks.link.anchor', 'linkAnchor'],
        ['~portable-text.marks.link.internal', 'linkInternal'],
        ['~portable-text.marks.link.external', 'linkExternal'],
    ],
    marks: [
        ['link.anchor', 'annotationLinkAnchor'],
        ['link.internal', 'annotationLinkInternal'],
        ['link.external', 'annotationLinkExternal'],
    ]
})

useDrawerRegister([
    'header.menu',
])

const listeners: TransitionProps = {
    name: 'default',
    mode: 'out-in',
    onBeforeEnter: (el) => {
        gsap.set(el, {opacity: 0})
        scroll?.lenis?.resize()
    },
    onEnter: (el, done) => {
        gsap.to(
            el, {
            opacity: 1,
            onComplete: () => done()
        })
    },
    onLeave: (el: any, done) => {
        gsap.to(
            el, {
            opacity: 0,
            onComplete: () => done()
        })
    }
}

onMounted(() => scroll.init());
onBeforeUnmount(() => scroll.destroy());
</script>

<template>
    <ClientOnly>
        <Header />
        <main class="font-sans">
            <NuxtPage :transition="listeners" />
        </main>
        <Footer />
        <DrawerRenderer />
        <PreLoader />
    </ClientOnly>
</template>