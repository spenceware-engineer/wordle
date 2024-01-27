import { atom } from 'recoil'

const currentUserState = atom({
  key: 'currentUser',
  default: ''
})

export default currentUserState