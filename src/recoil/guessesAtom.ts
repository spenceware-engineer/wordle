import { atom, RecoilState } from 'recoil'

const guessesState: RecoilState<any> = atom({
  key: 'guessesState',
  default: []
})

export default guessesState