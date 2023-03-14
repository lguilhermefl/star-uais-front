import * as cryptoJs from 'crypto-js'

const secret = import.meta.env.VITE_CRYPTOJS_SECRET

// 7 days for expiration
const expiryDuration = 7 * 24 * 60 * 60 * 1000

const encrypt = (data: any) => {
  if (data != null) {
    return cryptoJs.AES.encrypt(JSON.stringify(data), secret).toString()
  }
  return null
}

const decrypt = (ciphertext: any) => {
  try {
    if (ciphertext != null && ciphertext !== 'null') {
      const bytes = CryptoJS.AES.decrypt(ciphertext.toString(), secret)
      const decrypted = bytes.toString(CryptoJS.enc.Utf8)
      return JSON.parse(decrypted)
    }
    return null
  } catch (e) {
    return null
  }
}

const store = (key: any, value: any) => {
  return localStorage.setItem(key, value)
}

const read = (key: any) => {
  return localStorage.getItem(key)
}

const getExpiry = () => {
  return new Date().getTime() + expiryDuration
}

const isExpired = (expiry: any) => {
  return new Date().getTime() > parseInt(expiry, 10)
}

const storeExpiry = (key: any, value: any, expiry = false) => {
  const encryptedData = encrypt(value)
  if (expiry) {
    const encryptedExpiry = encrypt(getExpiry())
    store(`${key}.e`, encryptedExpiry)
  }
  return store(key, encryptedData)
}

const readExpiry = (key: any) => {
  const expiryData = decrypt(read(`${key}.e`))
  const data = decrypt(read(key))
  if (data != null) {
    if (data && isExpired(expiryData)) {
      return { response: data, expired: true }
    }
    if (data && !isExpired(expiryData)) {
      return { response: data, expired: false }
    }
  }
  return { response: null, expired: true }
}

const clear = () => {
  localStorage.clear()
  return null
}

export { encrypt, decrypt, clear, storeExpiry, readExpiry, read, store }
