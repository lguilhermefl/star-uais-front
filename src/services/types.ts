export interface UserResponseData {
  name: string
  picture: string
  accessToken: string
  refreshToken: string
}

export interface UserDataSignIn {
  email: string
  password: string
}

export interface UserDataSignUp {
  name: string
  email: string
  password: string
}

export interface UserDataProviderSignIn {
  name: string
  email: string
  picture: string
  provider: string
  providerId: string
}
