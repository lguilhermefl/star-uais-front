export const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
export const emailRegex = /^(?!.{41})([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
export const passwordRegex =
  /^(?! )[\w\s/u00C0/u00FF!@#$%^&*()_+=[\]{}|\\:;"'<>,.?/~`-]{8,20}$(?<! )/
export const nameRegex = /^[a-zA-Z ]{1,40}$/

const nameErrorMsg = 'Nome deve possuir entre 1 e 40 caracteres de A a Z.'
const emailErrorMsg = 'E-mail deve ser no formato example@mail.com. Máximo de 40 caracteres.'
const passwordErrorMsg = 'Password deve ter entre 8 e 20 caracteres.'

const emailIsValid = (inputValue: string): boolean => emailRegex.test(inputValue)
const passwordIsValid = (inputValue: string): boolean => passwordRegex.test(inputValue)
const nameIsValid = (inputValue: string): boolean => nameRegex.test(inputValue)

export const nameInputConfig = {
  placeholder: 'Nome',
  type: 'text',
  regex: nameRegex,
  errorMessage: nameErrorMsg
}

export const emailInputConfig = {
  placeholder: 'E-mail',
  type: 'text',
  regex: emailRegex,
  errorMessage: emailErrorMsg
}

export const passwordInputConfig = {
  placeholder: 'Senha',
  type: 'password',
  regex: passwordRegex,
  errorMessage: passwordErrorMsg
}

export const validation = {
  emailIsValid,
  passwordIsValid,
  nameIsValid
}
