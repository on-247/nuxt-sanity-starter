<script setup lang="ts">
const loaded = ref(false)

useNuxtApp().hook('page:finish', () => {
    loaded.value = true
});
</script>

<template>
    <div
        :class="[
            'fixed inset-0 z-[999] overflow-hidden',
            'transition-all duration-[300ms]',
            'bg-white flex items-center justify-center', {
            'opacity-0 pointer-events-none': loaded
        }]"
    >
        <div class="flex items-center gap-2">
            <Icon
                name="logo"
                :sizes="50"
            />
            <div class="font-medium">on-247</div>
        </div>
    </div>
</template>