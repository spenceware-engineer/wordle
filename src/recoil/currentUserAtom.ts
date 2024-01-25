import { atom } from 'recoil'

const currentUserState = atom({
  key: 'currentUser',
  default: null
})

export default currentUserState