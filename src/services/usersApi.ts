import api from './api'

export async function getUsers() {
  try {
    const response = await api.get('users')
    return response.data
  } catch (error: any) {
    const { status, data } = error.response
    const usersErrorMessage = getUsersErrorMessage(status, data.message)
    console.log(error)
    return alert(usersErrorMessage)
  }
}

const defaultErrorMessage = 'Algo deu errado, tente novamente!'
const usersErrors = {
  status: 401,
  errorMessage: 'Unauthorized',
  alertMessage: 'Faça login novamente para acessar os dados!'
}

const getUsersErrorMessage = (status: number, message: string) => {
  if (status === usersErrors.status && message === usersErrors.errorMessage)
    return usersErrors.alertMessage
  else return defaultErrorMessage
}
