<script setup lang="ts">
import type {SanityLinkAnchor} from '~/types'

const prop = defineProps<SanityLinkAnchor>()
const id = ref(`#${prop.anchorId}`)
const show = ref(true)
const scrollTo = () => {
    try {
        useScroll().to(id.value)
    }
    catch(e) {}
}
</script>

<template>
    <a
        v-if="show"
        :href="id"
        :class="[{
            'underline': underline,
            'flex items-center gap-2': icon
        }]"
        @click.prevent="scrollTo"
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
    </a>
</template>