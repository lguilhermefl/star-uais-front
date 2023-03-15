import type { ComputedRef, Ref } from 'vue'

export interface InputProps {
  placeholder: string
  type: string
  modelValue: Ref<null[]>
  regex: RegExp
  errorMessage: string
}

export interface SignInOrSignUpText {
  text: string
  buttonText: string
}

export interface FormProps {
  title: string
  googleLoginButtonConfig?: object
  inputsConfig: InputProps[]
  isFormValid: ComputedRef<boolean>
  submitButtonText: string
}

export interface ProviderUserResponseData {
  name: string
  email: string
  picture: string
  sub: string
}
