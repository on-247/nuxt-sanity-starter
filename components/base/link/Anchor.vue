<script setup lang="ts">
const prop = defineProps(['anchorId', 'underline'])
const settings = useState<any>('settings')

const scrollTo = () => {
    try {
        useScroll().to(`#${prop.anchorId}`)
        settings.value.headerMenuDrawerOpen = false
    }
    catch(e) {}
}
</script>

<template>
    <a
        :href="`#${anchorId}`"
        :class="{'underline': underline}"
        @click.prevent="scrollTo"
    >
        <slot />
    </a>
</template>