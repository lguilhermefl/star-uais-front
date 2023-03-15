<script setup lang="ts">
import { ref, computed } from 'vue'
import type { InputProps, FormProps } from './types'

import AuthFormBase from './AuthFormBase.vue'
import { validation, nameInputConfig, emailInputConfig, passwordInputConfig } from './config'

import { signUp } from '@/services/authApi'

const { nameIsValid, emailIsValid, passwordIsValid } = validation
const signUpUserData = ref([null, null, null])
const isLoading = ref(false)

const signUpFormIsValid = computed(() => {
  if (signUpUserData.value[0] && signUpUserData.value[1] && signUpUserData.value[2]) {
    return (
      nameIsValid(signUpUserData.value[0]) &&
      emailIsValid(signUpUserData.value[1]) &&
      passwordIsValid(signUpUserData.value[2])
    )
  }
  return false
})

const handleSignUp = () => {
  const body = {
    name: signUpUserData.value[0]!,
    email: signUpUserData.value[1]!,
    password: signUpUserData.value[2]!
  }

  signUp(body, isLoading)
}

const signUpInputsConfig: InputProps[] = [
  { ...nameInputConfig, modelValue: signUpUserData },
  { ...emailInputConfig, modelValue: signUpUserData },
  { ...passwordInputConfig, modelValue: signUpUserData }
]

const googleLoginButtonConfig = {
  buttonConfig: { text: 'continue_with' }
}

const signUpFormProps: FormProps = {
  title: 'CADASTRE-SE',
  googleLoginButtonConfig,
  inputsConfig: signUpInputsConfig,
  isFormValid: signUpFormIsValid,
  submitButtonText: 'CADASTRAR'
}

const emit = defineEmits(['showSignIn'])
const handleShowSignIn = () => {
  emit('showSignIn', true)
}
</script>

<template>
  <AuthFormBase v-bind="signUpFormProps" @submit="handleSignUp" :isLoading="isLoading">
    <span class="signin-signup">
      Já possui conta?
      <button @click="handleShowSignIn">Faça login!</button>
    </span>
  </AuthFormBase>
</template>
