<script setup lang="ts">
import {CLASS_FONT_SIZES} from '~/constants';

interface Props {
    active: boolean;
    icon?: {
        default: string;
        active: string;
    }
}

defineProps<Props>()
</script>

<template>
    <div class="flex items-center gap-4">
        <Icon
            :name="active ? (icon?.active ?? 'minus') : (icon?.default ?? 'plus')"
            :sizes="50"
            :stroke="1"
        />
        <h6 :class="[CLASS_FONT_SIZES.h6]"><slot /></h6>
    </div> 
</template>