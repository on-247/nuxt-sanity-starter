<script setup lang="ts">
import type {FormInput} from '~/types'

defineProps<FormInput>()
</script>

<template>
    <FormInput
        :floating-label="floatingLabel"
        :name="name"
        :required="required"
        :type="type"
        :variant="variant"
        class="first:mt-0 mt-4"
    >
        {{ label }}
    </FormInput>
</template>