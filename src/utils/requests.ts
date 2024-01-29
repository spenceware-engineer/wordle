import axios from 'axios'
import Toast from 'react-native-toast-message'

export const registerUser = async (username: string, password: string): Promise<any> => {
  try {
    const { status, data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/register`, {
      username,
      password
    }, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).catch(err => {
      throw new Error(JSON.stringify(err, undefined, 2))
    })

    switch (status) {
      case 409:
        return { message: data.message, status }
      case 201:
        return { ...data, status }
      case 500:
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again or restart app',
          visibilityTime: 2000,
          autoHide: true,
        })
    }
    return { data, status }
  } catch (e: any) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
      text2: 'Please try again or restart app',
      visibilityTime: 2000,
      autoHide: true,
    })
  }
}

export const loginUser = async (username: string, password: string): Promise<any> => {
  try {
    const { status, data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
      username,
      password,
    }, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).catch(err => {
      throw new Error(JSON.stringify(err, undefined, 2))
    })

    switch (status) {
      case 404:
        return { message: data.message, status }
      case 403:
        return { message: data.message, status }
      case 200:
        return { ...data, status }
      case 500:
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again or restart app',
          visibilityTime: 2000,
          autoHide: true,
        })
    }
    return { data, status }
  } catch (e: any) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
      text2: 'Please try again or restart app',
      visibilityTime: 2000,
      autoHide: true,
    })
  }
}

export const generateWord = async (username: string): Promise<any> => {
  try {
    const { status, data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/random-word`, {
      username,
    }, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).catch(err => {
      throw new Error(JSON.stringify(err, undefined, 2))
    })

    switch (status) {
      case 200:
        return { word: data.word, status }
      case 500:
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again or restart app',
          visibilityTime: 2000,
          autoHide: true,
        })
    }
    return { data, status }
  } catch (e: any) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
      text2: 'Please try again or restart app',
      visibilityTime: 2000,
      autoHide: true,
    })
  }
}

export const completeWord = async (username: string, word: string): Promise<any> => {
  try {
    const { status, data } = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/word-completed`, {
      username,
      word
    }, {
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    }).catch(err => {
      throw new Error(JSON.stringify(err, undefined, 2))
    })

    switch (status) {
      case 200:
        return { ...data, status }
      case 500:
        Toast.show({
          type: 'error',
          text1: 'Something went wrong',
          text2: 'Please try again or restart app',
          visibilityTime: 2000,
          autoHide: true,
        })
    }
    return { data, status }
  } catch (e: any) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
      text2: 'Please try again or restart app',
      visibilityTime: 2000,
      autoHide: true,
    })
  }
}
