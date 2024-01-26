import { useSetRecoilState, useRecoilValue } from 'recoil'
import guessesState from '../recoil/guessesAtom'
import hitsState from '../recoil/hitsAtom'
import currentWordState from '../recoil/currentWordAtom'

export const recordHits = (guess: string) => {
  const word = useRecoilValue(currentWordState)
  const hits = useRecoilValue(hitsState)
  const setHits = useSetRecoilState(hitsState)
  const newHits: any = {}
  word.split('').forEach((letter, i) => {
    if (!word.includes(letter)) {
      newHits[ letter ] = 0
    } else if (word.charAt(i) === letter) {
      newHits[ letter ] = 2
    } else if (!Object.keys(hits).includes('letter')) {
      newHits[ letter ] = 1
    }
  })
  setHits((hs: any) => { return { ...hs, newHits } })

}

export const submitGuess = (guess: string) => {
  const setGuesses = useSetRecoilState(guessesState)
  setGuesses((currentGuesses: any) => [ ...currentGuesses, guess ])
  recordHits(guess)
}

export const clearGuesses = () => {
  const setGuesses = useSetRecoilState(guessesState)
  const setHits = useSetRecoilState(hitsState)
  setGuesses(() => [])
  setHits(() => { return {} })
}
