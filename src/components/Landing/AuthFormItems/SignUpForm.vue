<script setup lang="ts">
import { ref, computed } from "vue";
import type { InputProps, GoogleLoginConfig, FormProps } from "./types";

import AuthFormBase from "./AuthFormBase.vue";
import {
  validation,
  nameInputConfig,
  emailInputConfig,
  passwordInputConfig,
} from "./config";

const { nameIsValid, emailIsValid, passwordIsValid } = validation;
const signUpUserData = ref([null, null, null]);

const signUpFormIsValid = computed(() => {
  if (
    signUpUserData.value[0] &&
    signUpUserData.value[1] &&
    signUpUserData.value[2]
  ) {
    return (
      nameIsValid(signUpUserData.value[0]) &&
      emailIsValid(signUpUserData.value[1]) &&
      passwordIsValid(signUpUserData.value[2])
    );
  }
  return false;
});

const validateSignUpUserData = () => console.log(signUpFormIsValid.value);

const signUpInputsConfig: InputProps[] = [
  { ...nameInputConfig, modelValue: signUpUserData },
  { ...emailInputConfig, modelValue: signUpUserData },
  { ...passwordInputConfig, modelValue: signUpUserData },
];

const signUpGoogleLoginConfig: GoogleLoginConfig = {
  googleHandler: (userInfo: object) => console.log(userInfo),
  buttonConfig: { text: "continue_with" },
};

const signUpFormProps: FormProps = {
  title: "CADASTRE-SE",
  googleLoginConfig: signUpGoogleLoginConfig,
  inputsConfig: signUpInputsConfig,
  isFormValid: signUpFormIsValid,
  submitButtonText: "CADASTRAR",
};

const emit = defineEmits(["showSignIn"]);
const handleShowSignIn = () => {
  emit("showSignIn", true);
};
</script>

<template>
  <AuthFormBase v-bind="signUpFormProps" @submit="validateSignUpUserData">
    <span class="signin-signup">
      Já possui conta?
      <button @click="handleShowSignIn">Faça login!</button>
    </span>
  </AuthFormBase>
</template>
