<script setup lang="ts">
const scroll = useScroll()
const settings = useState<any>('settings')
const smallDevice = useBreakpoint().between('xs', 'lg')

const scrollDirection = ref('up')
const scrollY         = ref(window.scrollY)
const hasScrolled     = computed(() => scrollY.value > 0)
const hideNav         = computed(() => scrollDirection.value === 'down'
                                       && hasScrolled.value)

scroll.up(({y}) => {scrollY.value = y; scrollDirection.value = 'up'})
scroll.down(({y}) => {scrollY.value = y; scrollDirection.value = 'down'})
</script>

<template>
    <header
        :class="[
            'fixed z-50 top-0 right-0 left-0 w-full transition-all',
            'w-full border-b border-slate-300', {
            'text-white': settings.isHeaderLight && !hasScrolled,
            'bg-white text-black': hasScrolled,
            'opacity-0 pointer-events-none': hideNav    
        }]"
    >
        <div class="container mx-auto px-[20px]">
            <div class="flex items-center justify-between">
                <NuxtLink to="/">
                    <Icon
                        name="logo"
                        :sizes="50"
                    />
                </NuxtLink>
                <!--  -->
                <div
                    v-if="smallDevice"
                    class="flex gap-2 items-center"
                >
                    <button
                        type="button"
                        class="p-3"
                        @click="useDrawerActivate('header.menu')"
                    >
                        <Icon
                            name="menu"
                            :sizes="50"
                        />
                    </button>
                </div>
                <ul
                    v-else-if="!smallDevice && settings.menu?.links"
                    class="m flex flex items-center"    
                >
                    <MenuLinks :links="settings.menu.links" />
                </ul>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.m :deep(a) {
    line-height: 45px;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>