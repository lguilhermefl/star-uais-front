import api from './api'
import router from '@/router'
import { remove, storeExpiry } from '@/helpers/localstorage-helper'

import type { Ref } from 'vue'
import type {
  UserDataProviderSignIn,
  UserDataSignIn,
  UserDataSignUp,
  UserResponseData
} from './types'

export async function signIn(data: UserDataSignIn, isLoading: Ref<boolean>) {
  const email = data.email.toLowerCase()
  const body = {
    ...data,
    email
  }
  isLoading.value = true
  api
    .post('/auth/signin', body)
    .then(async ({ data }) => {
      locallyStoreUserResponseData(data)
      redirectTo('/home').then(() => (isLoading.value = false))
    })
    .catch((error) => {
      handleError(error, isLoading)
    })
}

export async function signUp(data: UserDataSignUp, isLoading: Ref<boolean>) {
  const email = data.email.toLowerCase()
  const body = {
    ...data,
    email
  }
  isLoading.value = true
  api
    .post('/auth/signup', body)
    .then(async ({ data }) => {
      locallyStoreUserResponseData(data)
      await redirectTo('/home')
      isLoading.value = false
    })
    .catch((error) => {
      handleError(error, isLoading)
    })
}

export async function providerSignIn(data: UserDataProviderSignIn) {
  const email = data.email.toLowerCase()
  const body = {
    ...data,
    email
  }
  api
    .post('/auth/provider', body)
    .then(async ({ data }) => {
      locallyStoreUserResponseData(data)
      await redirectTo('/home')
    })
    .catch((error) => {
      handleError(error)
    })
}

export async function logout(isLoading: Ref<boolean>) {
  isLoading.value = true
  api
    .get('/auth/logout')
    .then(async () => {
      removeUserInfoFromLocalStorage()
      await redirectTo('/')
      isLoading.value = false
    })
    .catch((error) => {
      console.log(error)
      isLoading.value = false
      alert(defaultErrorMessage)
    })
}

const defaultErrorMessage = 'Algo deu errado, tente novamente!'
const authErrors = [
  {
    status: 400,
    errorMessage: 'User does not exist',
    alertMessage: 'E-mail não cadastrado!'
  },
  {
    status: 401,
    errorMessage: 'Incorrect credentials',
    alertMessage: 'E-mail ou senha inválidos!'
  },
  {
    status: 409,
    errorMessage: 'Email already registered',
    alertMessage: 'E-mail já cadastrado!'
  }
]

const getAuthErrorMessage = (status: number, message: string) =>
  authErrors.find((error) => error.status === status && error.errorMessage === message)

const redirectTo = async (path: string) => await router.push(path)

const locallyStoreUserResponseData = (data: UserResponseData) => {
  const { accessToken, refreshToken, name, picture } = data
  storeExpiry('access_token', accessToken, true)
  storeExpiry('refresh_token', refreshToken, true)
  storeExpiry('user_info', { name, picture })
}

const removeUserInfoFromLocalStorage = () => {
  remove('access_token')
  remove('access_token.e')
  remove('refresh_token')
  remove('refresh_token.e')
  remove('user_info')
}

const handleError = (error: any, isLoading?: Ref<boolean>) => {
  if (isLoading) isLoading.value = false
  if (error.response) {
    const { status, data } = error.response
    const authErrorMessage = getAuthErrorMessage(status, data.message)
    console.log(error)
    if (authErrorMessage) return alert(authErrorMessage.alertMessage)
    alert(defaultErrorMessage)
  }
  alert(defaultErrorMessage)
}
