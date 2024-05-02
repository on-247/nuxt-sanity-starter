<script setup lang="ts">
defineProps(['body', 'expanded'])

const container = ref()
const height = computed(() => {
    if (!container.value) return 0
    return container.value.children[0].getBoundingClientRect().height
})
</script>

<template>
    <span>
        <div
            ref="container"
            :class="[
                'overflow-hidden',
                'pl-4 ml-[19.2px]',
                'transition-all ease-[cubic-bezier(0.69,0.58,0,0.96)] duration-[400ms]'
            ]"
            :style="{
                height: expanded ? `${height}px` : '0px',
                opacity: expanded ? '1' : '0'
            }"
        >
            <PortableText
                :value="body"
                flex-col
                :class="['gap-y-1 pt-4']"
            />
        </div>
    </span>
</template>