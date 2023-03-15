import axios from 'axios'
import { decrypt, read, storeExpiry } from '@/helpers/localstorage-helper'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

instance.defaults.headers.common['Authorization'] = 'Bearer ' + decrypt(read('access_token'))

export async function refreshToken() {
  instance.defaults.headers.common['Authorization'] = 'Bearer ' + decrypt(read('refresh_token'))
  const response = await instance.get('/auth/refresh')
  storeExpiry('access_token', response.data.accessToken, true)
  storeExpiry('refresh_token', response.data.refreshToken, true)
  instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
}

instance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    if (error.response) {
      const { status, data } = error.response

      switch (status) {
        case 401:
          if (data.message === 'Unauthorized') {
            try {
              await refreshToken()
              const config = error.config
              return await instance({ method: config.method, url: config.url, data: config.data })
            } catch (e) {
              return (window.location.href = '/')
            }
          } else {
            return (window.location.href = '/')
          }
        default:
          return Promise.reject(error)
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject(error)
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(error)
    }
  }
)

export default instance
