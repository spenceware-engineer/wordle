import {atom} from 'recoil'

const currentScoreState = atom({
  key: 'currentScore',
  default: 0
})

export default currentScoreState