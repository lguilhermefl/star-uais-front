<script setup lang="ts">
import { ref, computed } from 'vue'
import type { InputProps, FormProps } from './types'

import AuthFormBase from './AuthFormBase.vue'
import { validation, emailInputConfig, passwordInputConfig } from './config'

import { signIn } from '@/services/authApi'

const { emailIsValid, passwordIsValid } = validation
const signInUserData = ref([null, null])
const isLoading = ref(false)

const signInFormIsValid = computed(() => {
  if (signInUserData.value[0] && signInUserData.value[1]) {
    return emailIsValid(signInUserData.value[0]) && passwordIsValid(signInUserData.value[1])
  }
  return false
})

const handleSignIn = () => {
  const body = {
    email: signInUserData.value[0]!,
    password: signInUserData.value[1]!
  }
  signIn(body, isLoading)
}

const signInInputsConfig: InputProps[] = [
  { ...emailInputConfig, modelValue: signInUserData },
  { ...passwordInputConfig, modelValue: signInUserData }
]

const signInFormProps: FormProps = {
  title: 'ACESSE SUA CONTA',
  inputsConfig: signInInputsConfig,
  isFormValid: signInFormIsValid,
  submitButtonText: 'FAZER LOGIN'
}

const emit = defineEmits(['showSignIn'])
const handleShowSignIn = () => {
  emit('showSignIn', false)
}
</script>

<template>
  <AuthFormBase v-bind="signInFormProps" @submit="handleSignIn" :isLoading="isLoading">
    <span class="signin-signup">
      Ainda não possui conta?
      <button @click="handleShowSignIn">Cadastre-se!</button>
    </span>
  </AuthFormBase>
</template>

<style>
.signin-signup {
  color: var(--color-text);
}

.signin-signup > button {
  background-color: transparent;
  color: var(--vt-c-white);
  font-weight: 600;
  border: none;
}
</style>
