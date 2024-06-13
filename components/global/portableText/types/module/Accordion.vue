<script setup lang="ts">
import type {SanityModuleAccordion} from '~/types';

defineProps<SanityModuleAccordion & {
    icon?: {
        default: string;
        active: string;
    }
}>()

const currentKey = ref()
const setKey = (key: any) => currentKey.value = currentKey.value === key ? null : key
const isCurrent = computed(() => (group: SanityModuleAccordion['groups'][0]) => currentKey.value === group._key)
</script>

<template>
    <div class="flex flex-col divide-y divide-pink/[0.1]">
        <div
            v-for="accordionGroup in groups"
            :key="accordionGroup._key"
            class="py-[20px] cursor-pointer"
            @click="setKey(accordionGroup._key)"
        >

            <BaseAccordionBody
                :expanded="isCurrent(accordionGroup)"
            >
                <PortableText
                    :value="accordionGroup.body"
                    flex-col
                    :class="['gap-y-1 pt-4']"
                />
            </BaseAccordionBody>
            <BaseAccordionHeader
                :active="isCurrent(accordionGroup)"
                :icon="icon"
            >
                {{accordionGroup.title}}
            </BaseAccordionHeader>
        </div>
    </div>
</template>