import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
import Toast from 'react-native-toast-message'
import { useSetRecoilState } from 'recoil'
import currentUserState from '../recoil/currentUserAtom'
import currentWordState from '../recoil/currentWordAtom'

/**
 * Register new user
 * return error string if the username is duplicated
 * set current user and word if successfully created user
 * toast and return null if 500 response
 * 
 * @param username string - user's chosen username
 * @param password password - user's chosen password
 * @returns string or null - string error message or null on success or 500
 */
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
      return null
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      return null
  }
}

/**
 * login user
 * if username is not found, return error string
 * if password is incorrect, return error string
 * on success, set current user and word states, return null
 * toast and return null if 500 response
 * 
 * @param username string - username entered by user
 * @param password string - password entered by user
 * @returns string or null - error message string or null on success or 500
 */
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
      return null
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      return null
  }
}

/**
 * generates a new word for game play
 * todo: clear guesses state
 * sets new word in current word state
 * toast and return null if 500 response
 * 
 * @param username string - current user's username
 * @returns null
 */
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
      return null
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      return null
  }
}

/**
 * set word as a completed word
 * generate a new word
 * todo: clear guesses state
 * set new word in recoil state for game play
 * toast and return null if 500 response
 * 
 * @param username string - current user's username
 * @param word string - successfully completed word
 * @returns null
 */
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
      return null
    case 500:
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: 'Please try again or restart app',
        visibilityTime: 2000,
        autoHide: true,
      })
      return null
  }
}
