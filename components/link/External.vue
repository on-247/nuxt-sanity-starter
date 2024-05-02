<script setup lang="ts">
defineProps(['url', 'targetBlank'])
</script>

<template>
    <a
        :href="url"
        :target="targetBlank ? '_blank' : '_self'"
        class="underline"
    >
        <slot />
    </a>
</template>