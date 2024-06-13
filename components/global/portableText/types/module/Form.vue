<script setup lang="ts">
import type {SanityModuleForm} from '~/types'

defineProps<SanityModuleForm>()
</script>

<template>
    <div class="w-full flex flex-col lg:flex-row">
        <div class="w-full">
            <PortableText
                :value="body"
                flex-col
            />
        </div>
        <div class="w-full lg:ml-12 lg:first:ml-0 mt-8 lg:mt-0">
            <FormDrop
                :form-id="form.formDropFormId"
                :captcha-sitekey="form.turnstileSiteKey"
                :success-message="form.successMessage"
                :error-message="form.errorMessage"
            >
                <template #="{loading, error, message, actions}">
                    <Form
                        :loading="loading"
                        :error="error"
                        :submit-label="form.submitLabel"
                        :loading-label="form.loadingLabel"
                        @submit-obj="actions.submit"
                    >
                        <PortableText
                            :value="form.fields"
                            flex-col
                        />
                        <template #message>
                            <span
                                v-if="message"
                                :style="{
                                    color: error
                                        ? 'var(--form-invalid-color)' 
                                        : 'var(--form-valid-color)'
                                }"
                            >
                                {{ message }}
                            </span>
                        </template>
                    </Form>
                </template>
            </FormDrop>
        </div>
    </div>
</template>