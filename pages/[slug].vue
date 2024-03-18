<script setup lang="ts">
import {PAGE_QUERY} from '~/queries/sanity/page'

const {data} = await useSanityQuery<any>(PAGE_QUERY, {slug: useRoute().params.slug})

if (!data.value) throw createError({
    statusCode: 404,
    fatal: true
})

if (data.value?.seo)
    useSeoMeta({
        title: data.value.seo?.title,
        description: data.value.seo?.description,
        ogDescription: data.value.seo?.description
    })
</script>

<template>
    <div>
        <BasePageSection
            v-if="data?.sections"
            v-for="section in data?.sections"
            :="section"
        />
    </div>
</template>