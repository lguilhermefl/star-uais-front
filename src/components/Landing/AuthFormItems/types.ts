import type { ComputedRef, Ref } from 'vue'

export interface GoogleLoginConfig {
  buttonConfig?: object
  googleHandler: Function
}

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
  googleLoginConfig: GoogleLoginConfig
  inputsConfig: InputProps[]
  isFormValid: ComputedRef<boolean>
  handleSubmit?: Function
  submitButtonText: string
}
