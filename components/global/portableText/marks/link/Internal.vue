<script setup lang="ts">
import type {SanityLinkInternal} from '~/types'

const prop = defineProps<SanityLinkInternal>()

const routeTo = computed(() => {
    switch (prop.documentType) {
        default:
            return prop.slug
    }
})
</script>

<template>
    <NuxtLink
        :to="routeTo"
        :class="[{
            'underline': underline,
            'flex items-center gap-2': icon
        }]"
    >
        <Icon
            v-if="icon && !iconTraling"
            :name="icon"
        />
        <slot>{{ title }}</slot>
        <Icon
            v-if="icon && iconTraling"
            :name="icon"
        />
    </NuxtLink>
</template>