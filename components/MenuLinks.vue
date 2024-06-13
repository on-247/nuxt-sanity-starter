<script setup lang="ts">
import type {SanityLink} from '~/types'

interface Props {
    links: SanityLink[];
}

defineProps<Props>()
</script>

<template>
    <PortableText
        :value="links"
        :wrapped="false"
    />
</template>