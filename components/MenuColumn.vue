<script setup lang="ts">
import type {SanityLink} from '~/types'

interface Props {
    label: string;
    links: SanityLink[];
}

defineProps<Props>()
</script>

<template>
    <div>
        <h6 class="font-medium text-gray mb-2 lg:mb-4">{{ label }}</h6>
        <ul class="flex flex-col gap-2 lg:gap-4">
            <MenuLinks :links="links" />
        </ul>
    </div>
</template>