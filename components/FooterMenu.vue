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
        <h6 class="font-medium text-gray mb-2">{{ label }}</h6>
        <ul class="flex flex-col">
            <Menu
                :links="links"
                link-class="py-2"
                list
                class="flex flex-col"
            />
        </ul>
    </div>
</template>