<script setup lang="ts">
const prop = defineProps(['to', 'documentType', 'underline'])

const routeTo = computed(() => {
    switch (prop.documentType) {
        default:
            return prop.to
    }
})
</script>

<template>
    <NuxtLink
        :to="routeTo"
        :class="{'underline': !!underline}"
    >
        <slot />
    </NuxtLink>
</template>