<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { CallbackTypes } from 'vue3-google-login'
import type { InputProps, ProviderUserResponseData } from './types'

import { GoogleLogin, decodeCredential } from 'vue3-google-login'
import { googleClientId } from './config'
import DividerItem from './DividerItem.vue'
import InputItem from './InputItem.vue'
import { providerSignIn } from '@/services/authApi'

defineProps<{
  title: string
  googleLoginButtonConfig?: object
  inputsConfig: InputProps[]
  isFormValid: ComputedRef<boolean>
  submitButtonText: string
  isLoading: boolean
}>()

defineEmits(['submit', 'showSignIn'])

const googleLoginCallback: CallbackTypes.CredentialCallback = async (response) => {
  // decodeCredential will retrive the JWT payload from the credential
  if (response.credential) {
    const userData = decodeCredential(response.credential)
    const { email, name, picture, sub } = userData as ProviderUserResponseData
    const body = {
      name,
      email,
      picture,
      provider: 'google',
      providerId: sub
    }
    return await providerSignIn(body)
  }

  return console.log('houve um erro')
}
</script>

<template>
  <div class="form-wrapper">
    <h2 class="form-title">{{ title }}</h2>
    <div class="google-auth">
      <GoogleLogin
        :clientId="googleClientId"
        :callback="googleLoginCallback"
        auto-login
        :button-config="googleLoginButtonConfig"
      />
    </div>
    <form class="form" @submit.prevent="$emit('submit')">
      <DividerItem />
      <div v-for="(inputConfig, index) in inputsConfig" :key="inputsConfig[0].placeholder + index">
        <InputItem
          v-bind="inputConfig"
          v-model="inputConfig.modelValue.value[index]"
          :isLoading="isLoading"
        />
      </div>
      <button class="btn-auth" type="submit" :disabled="!isFormValid.value || isLoading">
        {{ submitButtonText }}
      </button>
      <slot></slot>
    </form>
  </div>
</template>

<style>
.form-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 220px;
  height: 100%;
}

.form-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

.google-auth {
  max-height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  gap: 0.55rem;
}

.btn-auth {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-soft);
  font-size: 20px;
  font-weight: 700;
  background: var(--vt-c-white);
  border-radius: 5px;
  height: 40px;
  box-sizing: border-box;
  margin-top: 1.2rem;
  border: none;
}

.btn-auth:disabled {
  background-color: rgb(232, 237, 235);
  border-color: rgb(193, 199, 198);
  color: rgb(136, 147, 151);
}
</style>
