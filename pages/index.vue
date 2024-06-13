<script setup lang="ts">
import {HOME_PAGE_QUERY} from '~/queries/sanity/home'

// @TODO: error handling
const {data} = await useSanityQuery<any>(HOME_PAGE_QUERY)

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
            v-for="{anchorId, body} in data.sections"
            :anchor-id="anchorId"
        >
            <PortableText
                :value="body"
                :flex-col="true"
                class="gap-y-8 container w-full mx-auto px-[20px] py-16"
            />
        </BasePageSection>
    </div>
</template>