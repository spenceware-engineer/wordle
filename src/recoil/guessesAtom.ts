import { atom, RecoilState } from 'recoil'

const guessesState: RecoilState<any> = atom({
  key: 'guesses',
  default: []
})

export default guessesState