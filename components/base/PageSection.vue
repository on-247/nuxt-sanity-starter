<script setup lang="ts">
import type {PageSection} from '~/types'

const prop = defineProps<PageSection>()
const id = computed(() => prop.anchorId === 'Sectie' ? undefined : prop.anchorId)
</script>

<template>
    <section :id="id">
        <slot />
    </section>
</template>