import {
  View
} from 'react-native'
import GuessRow from './GuessRow'
import { useRecoilValue } from 'recoil'
import guessesState from '../../recoil/guessesAtom'

const GuessArea = () => {
  const guesses = useRecoilValue(guessesState)

  return (
    <View>
      <GuessRow guess={guesses?.[ 0 ] || ''} />
      <GuessRow guess={guesses?.[ 1 ] || ''} />
      <GuessRow guess={guesses?.[ 2 ] || ''} />
      <GuessRow guess={guesses?.[ 3 ] || ''} />
      <GuessRow guess={guesses?.[ 4 ] || ''} />
      <GuessRow guess={guesses?.[ 5 ] || ''} />
    </View>
  )
}

export default GuessArea