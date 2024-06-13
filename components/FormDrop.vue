<script setup lang="ts">
import {FormDrop} from '~/lib'

interface Props {
    formId: string;
    captchaSitekey: string;
    errorMessage: string;
    successMessage: string;
}

const prop = defineProps<Props>()
const loading = ref(false)
const message = ref()
const error = ref(false)
const formDrop = new FormDrop(
    'https://formdrop-api.on-247.nl',
    prop.formId
)

const captchaVerify = async (response: string) =>
{
    try {

        message.value = null
        error.value = false
        loading.value = true

        await formDrop.updateResponse(response)

    }
    catch {

        error.value = true
        message.value = prop.errorMessage

    }
    finally {

        loading.value = false

    }
}

const captchaError = () =>
{
    message.value = prop.errorMessage
    error.value = true
}

const submit = async (obj: Record<string, any>) =>
{
    try {

        message.value = null
        error.value = false
        loading.value = true

        await formDrop.submit(obj)

        message.value = prop.successMessage

    }
    catch {

        error.value = true
        message.value = prop.errorMessage

    }
    finally {

        loading.value = false

    }
}
</script>

<template>
    <slot :="{loading, message, error, actions: {submit}}" />
    <Captcha
        :sitekey="captchaSitekey"
        @verify="captchaVerify"
        @expire="captchaError"
        @fail="captchaError"
    />
</template>