<script setup lang="ts">
import type {SanityModuleArticle} from '~/types'

interface Props {
    groups: SanityModuleArticle['groups'];
}

defineProps<Props>()

const scrollTo = (to: string) => {
    useScroll().to(to)
}
</script>

<template>
    <nav class="w-full flex flex-col">
        <div class="font-medium mb-3">Op deze pagina:</div>
        <a
            v-for="{title, slug} in groups"
            :href="`#${slug}`"
            class="py-3 pl-4 text-gray hover:text-black"
            @click.prevent="scrollTo(`#${slug}`)"
        >
            {{ title }}
        </a>
    </nav>    
</template>