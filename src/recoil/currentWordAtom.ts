import { atom } from 'recoil'

const currentWordState = atom({
  key: 'currentWord',
  default: 'hello'
})

export default currentWordState