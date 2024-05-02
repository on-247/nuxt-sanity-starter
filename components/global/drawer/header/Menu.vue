<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

interface Props {
    id: string;
}

const prop = defineProps<Props>()
const route = useRoute()
const settings = useState<any>('settings')

const stop = watch([
    () => route.name,
    () => route.path,
], () => useDrawerDeactivate(prop.id))

onBeforeUnmount(() => stop())
</script>

<template>
    <ul :class="['flex flex-col', FONT_SIZES.h3]">
        <Menu
            v-if="settings.menu?.links?.length"
            :links="settings.menu.links"
            link-class="w-full px-4 py-3"
            list
        />
    </ul>
</template> 