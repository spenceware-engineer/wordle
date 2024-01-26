import {
  useSetRecoilState,
} from 'recoil'
import currentGuessState from '../recoil/currentGuessAtom'

export const addLetter = (letter: string) => {
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  setCurrentGuess(prevGuess => prevGuess.concat(letter))
}

export const removeLetter = () => {
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  setCurrentGuess(prevGuess => prevGuess.slice(0, prevGuess.length - 1))
}