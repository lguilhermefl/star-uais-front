<script setup lang="ts">
import SignInForm from './AuthForm/SignInForm.vue'
import SignUpForm from './AuthForm/SignUpForm.vue'
import { ref } from 'vue'

const showSignIn = ref(true)

const showSignInControler = (newValue: boolean): void => {
  showSignIn.value = newValue
}
</script>

<template>
  <Transition name="fade" mode="out-in">
    <SignInForm v-if="showSignIn" @show-sign-in="showSignInControler" />
    <SignUpForm v-else @show-sign-in="showSignInControler" />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
