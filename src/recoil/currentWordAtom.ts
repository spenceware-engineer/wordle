import { atom } from 'recoil'

const currentWordState = atom({
  key: 'currentWord',
  default: ''
})

export default currentWordState