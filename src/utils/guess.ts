import { useSetRecoilState, useRecoilValue } from 'recoil'
import guessesState from '../recoil/guessesAtom'
import hitsState from '../recoil/hitsAtom'
import currentWordState from '../recoil/currentWordAtom'

/**
 * get the current hits (guessed letters)
 * set the hits with their values
 * values are 
 *    0 for not in the word
 *    1 for in the word, but not in the right spot
 *    2 for in the word in the right spot
 * 
 * @param word string - current word in game
 * @param guess string - user's word guess
 * @returns boolean - winning guess (true) or not (false)
 */
export const recordHits = (word: string, guess: string) => {
  if (guess === word) return true
  const hits = useRecoilValue(hitsState)
  const setHits = useSetRecoilState(hitsState)
  const newHits: any = {}
  guess.split('').forEach((letter, i) => {
    if (!word.includes(letter)) {
      newHits[ letter ] = 0
    } else if (word.charAt(i) === letter) {
      newHits[ letter ] = 2
    } else if (!Object.keys(hits).includes('letter')) {
      newHits[ letter ] = 1
    }
  })
  setHits((hs: any) => { return { ...hs, newHits } })
  return false
}

/**
 * get the current word
 * check for winning guess - return true for winning guess
 * add guess to state
 * record hits
 * return false indicating the guess was not a win
 * 
 * @param guess string - user's submitted guess
 * @returns boolean - winning guess (true) or not (false)
 */
export const submitGuess = (guess: string) => {
  const word = useRecoilValue(currentWordState)
  if (guess === word) return true
  const setGuesses = useSetRecoilState(guessesState)
  setGuesses((currentGuesses: any) => [ ...currentGuesses, guess ])
  recordHits(word, guess)
  return false
}

/**
 * reset guesses and hits states for next round
 */
export const clearGuesses = () => {
  const setGuesses = useSetRecoilState(guessesState)
  const setHits = useSetRecoilState(hitsState)
  setGuesses(() => [])
  setHits(() => { return {} })
}
