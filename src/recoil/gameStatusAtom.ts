import { atom } from 'recoil'

const gameStatusState = atom({
  key: 'gameStatus',
  default: 'playing'
})

export default gameStatusState