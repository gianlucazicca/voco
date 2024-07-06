<script setup lang="ts">
import { z } from 'zod'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string(),
})


type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
})

const validate = (state: any): FormError[] => {
  const errors = []
  if(!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<Schema>) {
  console.log(event)
  const loginUser: FormSubmitEvent<Schema> = await $fetch('/api/auth/login', {
    method: 'POST',
    body: event.data
  })
}

async function onError (event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <UForm class="p-6 space-y-6" :schema="schema" :state="state" :validate="validate" @submit="onSubmit" @error="onError">
    <UFormGroup name="email">
      <UInput v-model="state.email" placeholder="E-mail" />
    </UFormGroup>

    <UFormGroup name="password">
      <UInput v-model="state.password" type="password" placeholder="Password" />
    </UFormGroup>
    <UButton type="submit">
      Login
    </UButton>
  </UForm>
</template>

<style scoped>

</style>