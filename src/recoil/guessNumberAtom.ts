import { atom } from 'recoil'

const guessNumberState = atom({
  key: 'guessNumber',
  default: 0,
})

export default guessNumberState