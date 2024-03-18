<script setup lang="ts">
import {FONT_SIZES} from '~/constants'

const emit = defineEmits<{
    (e: 'close', payload: boolean): void
}>()

const isSmallDevice = useBreakpoint().between('xs', 'md')

const dragLimit = 100
const dragClose = ref()
const dragClosePrev = ref(0)
const dragCloseNow = ref(0)
const dragCloseY = computed(() => {
    let y = dragCloseNow.value - dragClosePrev.value
    return Math.min(Infinity, Math.max(0, y))
})
const dragListeners = {
    'touchstart': (e: TouchEvent) => dragClosePrev.value = e.touches[0].screenY,
    'touchmove': (e: TouchEvent) => dragCloseNow.value = e.touches[0].screenY,
    'touchend': (e: TouchEvent) => {
        if (dragCloseY.value >= dragLimit) emit('close', false)
        else {
            dragClosePrev.value = 0
            dragCloseNow.value = 0
        }
    }
}

const onClick = () => {
    if (isSmallDevice.value) return
    emit('close', false)
}

let clearOnUnmount: any[] = []
onMounted(() => {
    dragClose.value.addEventListener('touchstart', dragListeners.touchstart)
    dragClose.value.addEventListener('touchmove', dragListeners.touchmove)
    dragClose.value.addEventListener('touchend', dragListeners.touchend)

    clearOnUnmount.push(
        () => dragClose.value.removeEventListener('touchstart', dragListeners.touchstart),
        () => dragClose.value.removeEventListener('touchmove', dragListeners.touchmove),
        () => dragClose.value.removeEventListener('touchend', dragListeners.touchend),
    )

    clearOnUnmount.push(
        useTempus(() => {
            dragClose.value.parentNode.style.transform = `translateY(${dragCloseY.value}px)`
        }, 2)
    )
})
onBeforeUnmount(() => clearOnUnmount.forEach(clear => clear()))
</script>

<template>
    <div class="fixed inset-0 z-50 touch-none">
        <div
            class="opacity-in absolute inset-0 overflow-hidden bg-black/[0.5]"
            @click="$emit('close', false)"
        />
        <aside
            :class="[
                'absolute inset-3',
                'flex flex-col justify-end md:justify-center items-center',
                'pointer-events-none'
            ]"
        >
            <div
                :class="[
                    'fade-in',
                    'bg-white text-zinc-800 border border-white/[0.1] rounded-[.5em]',
                    'flex flex-col justify-center items-center w-full h-auto max-h-full',
                    'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:top-0 md:left-0 md:translate-x-0 md:translate-y-0 md:inset-3',
                    'md:max-w-[500px]',
                    'pointer-events-auto',
                ]"
            >
                <header
                    ref="dragClose"
                    class="w-full flex justify-center"
                    @click="onClick"
                >
                    <Icon
                        name="minus"
                        :sizes="FONT_SIZES.h1"
                        :stroke="1"
                        class="cursor-pointer"
                    />
                </header>
                <!--  -->
                <main class="w-full h-full overflow-y-auto">
                    <slot />
                </main>
            </div>
        </aside>
    </div>
</template>

<style scoped>
@keyframes opacityIn {
    from {opacity: 0;}
    to {opacity: 1;}
}
@keyframes fadeIn {
    from {transform: scale(0.98);}
    to {transform: scale(1);}
}
.opacity-in {
    transform-origin: center;
    animation-name: opacityIn;
    animation-timing-function: cubic-bezier(0.4,0.57,0,0.98);
    animation-duration: .2s;
}
.fade-in {
    transform-origin: center;
    animation-name: fadeIn;
    animation-timing-function: cubic-bezier(0.4,0.57,0,0.98);
    animation-duration: .2s;
}
aside * {
    touch-action: none;
}
</style>