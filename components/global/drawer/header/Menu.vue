<script setup lang="ts">
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
    <ul class="flex flex-col px-[20px] py-8 gap-8">
        <MenuColumn
            v-for="menu in settings?.footerMenus"
            :label="menu.label"
            :links="menu.links"
        />
    </ul>
</template> 