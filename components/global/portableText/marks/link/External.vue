<script setup lang="ts">
import type {SanityLinkExternal} from '~/types'

defineProps<SanityLinkExternal>()
</script>

<template>
    <a
        :href="url"
        :target="targetBlank ? '_blank' : '_self'"
        :class="[{
            'underline': underline,
            'flex items-center gap-2': icon
        }]"
    >
        <Icon
            v-if="icon && !iconTraling"
            :name="icon"
        />
        <slot>{{ title }}</slot>
        <Icon
            v-if="icon && iconTraling"
            :name="icon"
        />
    </a>
</template>