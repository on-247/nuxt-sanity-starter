<script setup lang="ts">
import {SETTINGS_QUERY} from '~/queries/sanity/settings';

// @TODO: error handling
const {data} = await useSanityQuery<any>(SETTINGS_QUERY);
useState('settings', () => ({
    seo: data.value?.seo,
    menu: data.value?.menu,
    footerMenus: data.value?.footerMenus,
}));

if (data.value?.seo)
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    })

useDrawerRegister([
    'header.menu',
])

onMounted(() => useScroll().init());
onBeforeUnmount(() => useScroll().destroy());
</script>

<template>
    <ClientOnly>
        <Header />
        <main class="font-sans">
            <div class="mt-24" />
            <BasePageSection
                v-if="data?.notFoundPage"
                :="data.notFoundPage"
                flex-col
            />
        </main>
        <Footer />
        <DrawerRenderer />
    </ClientOnly>
</template>