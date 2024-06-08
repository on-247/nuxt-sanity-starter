<script setup lang="ts">
interface Props {
    anchorId: string;
}

const prop = defineProps<Props>()
const id = computed(() => prop.anchorId === 'Sectie' ? undefined : prop.anchorId)
</script>

<template>
    <section :id="id">
        <slot />
    </section>
</template>