<script setup lang="ts">
import type {FormRadio} from '~/types'

defineProps<FormRadio>()
</script>

<template>
    <FormRadio
        :name="name"
        :required="required"
        :radios="values.map(({value, label}) => [value, label])"
        :multiple="multiple"
    />
</template>