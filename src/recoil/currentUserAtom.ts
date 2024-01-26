import { atom } from 'recoil'

const currentUserState = atom({
  key: 'currentUser',
  default: 'cindy'
})

export default currentUserState