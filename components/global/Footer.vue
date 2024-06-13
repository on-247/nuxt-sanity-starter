<script setup lang="ts">
const settings = useState<any>('settings')

const year = computed(() => new Date().getFullYear())
</script>

<template>
    <footer
        id="footer"
        class="border-t border-slate-300"
    >
        <div class="container mx-auto px-[20px] pt-16 md:pt-28">
            <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <Icon
                    name="logo"
                    :sizes="50"
                    class="text-red mb-8"
                />
                <MenuColumn
                    v-for="menu in settings?.footerMenus"
                    :label="menu.label"
                    :links="menu.links"
                />
            </div>
            <!--  -->
            <div class="mt-16 pb-8 text-center text-sm text-gray">
                © {{ year }} [company name]
            </div> 
            <!--  -->
        </div>
    </footer>
</template>