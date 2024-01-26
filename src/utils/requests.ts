import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

// register
export const registerUser = async (username: string, password: string) => {
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
      // success - set states
      // data.username
      // data.word
      break;
    case 500:
      // toast
      break;
  }
}

// login
export const loginUser = async (username: string, password: string) => {
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
      // success - set states
      // data.username
      // data.word
      break;
    case 500:
      // toast
      break;
  }
}

// random word
export const generateWord = async (username: string) => {
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
      // success - set state
      // data.word
    case 500:
      // toast
  }
}

// complete word
export const completeWord = async (username: string, word: string) => {
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
      // success - set state
      // data.word
    case 500:
      // toast
  }
}
