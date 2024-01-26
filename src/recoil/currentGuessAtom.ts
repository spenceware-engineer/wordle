import {atom} from 'recoil'

const currentGuessState = atom({
  key: 'currentGuess',
  default: ''
})

export default currentGuessState