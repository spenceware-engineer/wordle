import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
import Toast from 'react-native-toast-message'
import { useSetRecoilState } from 'recoil'
import currentUserState from '../recoil/currentUserAtom'
import currentWordState from '../recoil/currentWordAtom'

// register
export const registerUser = async (username: string, password: string) => {
  const setUserState = useSetRecoilState(currentUserState)
  const setWordState = useSetRecoilState(currentWordState)
  const { status, data } = await axios.post(`${process.env.API_URL}/register`, {
    username,
    password
  }, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  switch (status) {
    case 409:
      return data.message
    case 201:
      setUserState(() => data.username)
      setWordState(() => data.word)
      break
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      break
  }
}

// login
export const loginUser = async (username: string, password: string) => {
  const setUserState = useSetRecoilState(currentUserState)
  const setWordState = useSetRecoilState(currentWordState)
  const { status, data } = await axios.get(`${process.env.API_URL}/login`, {
    data: {
      username,
      password
    },
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  switch (status) {
    case 404:
      return data.message
    case 403:
      return data.message
    case 200:
      setUserState(() => data.username)
      setWordState(() => data.word)
      break
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      break
  }
}

// random word
export const generateWord = async (username: string) => {
  const setWordState = useSetRecoilState(currentWordState)
  const { status, data } = await axios.get(`${process.env.API_URL}/random-word`, {
    data: {
      username
    },
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  switch (status) {
    case 200:
      setWordState(() => data.word)
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      break
  }
}

// complete word
export const completeWord = async (username: string, word: string) => {
  const setWordState = useSetRecoilState(currentWordState)
  const { status, data } = await axios.post(`${process.env.API_URL}/word-completed`, {
    username,
    word
  }, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })

  switch (status) {
    case 200:
      setWordState(() => data.word)
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      break
  }
}
