<script setup lang="ts">
const rendered = useDrawerRender()
</script>

<template>
    <div>
        <BaseDrawer
            v-for="component, renderId in rendered"
            :id="renderId"
            @close="useDrawerDeactivate(renderId)"
        >
            <Component :is="component()" />
        </BaseDrawer>
    </div>
</template>