<script setup lang="ts">
const prop = defineProps(['body', 'anchorId'])

const id = computed(() => prop.anchorId === 'Sectie' ? null : prop.anchorId)
</script>

<template>
    <section :id="id">
        <BasePortableText
            :value="body"
            :flex-col="true"
            class="gap-y-8 container w-full mx-auto px-[20px] py-16"
        />
    </section>
</template>