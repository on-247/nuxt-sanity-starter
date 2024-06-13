<script setup lang="ts">
import type {FormCheckbox} from '~/types'

const prop = defineProps<FormCheckbox>()
const value = ref()
const checked = computed(() => {
    return value.value === prop.values[0].value
})
</script>

<template>
    <FormCheckbox
        v-model="value"
        :name="name"
        :values="values.map(v => v.value)"
        :required="required"
        :class="[
            'rounded-md py-3 mt-2', {
            'border border-black': checked,
            'border border-gray/[.3] border-dashed': !checked
        }]"
    >
        {{ label }}
    </FormCheckbox>
</template>

<style lang="scss">
.indicator {
    width: 100% !important;
    height: 100% !important;
}
</style>