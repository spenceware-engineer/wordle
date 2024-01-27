import {
  StyleSheet,
  View,
} from 'react-native'
import GuessLetter from './GuessLetter'
import { useRecoilValue } from 'recoil'
import guessNumberState from 'recoil/guessNumberAtom'
import guessesState from 'recoil/guessesAtom'
import currentGuessState from 'recoil/currentGuessAtom'

interface GuessRowProps {
  guessNo: number
}

const GuessRow = ({
  guessNo
}: GuessRowProps) => {
  const guessNumber = useRecoilValue(guessNumberState)
  const guesses = useRecoilValue(guessesState)
  const currentGuess = useRecoilValue(currentGuessState)

  const word = (
    guessNumber < guessNo
      ? ''
      : guessNumber === guessNo
        ? currentGuess
        : guesses[ guessNo ]
  )

  return (
    <View style={styles.guessContainer}>
      <GuessLetter guessNo={guessNo} letterNo={0} letter={word?.charAt(0)} />
      <GuessLetter guessNo={guessNo} letterNo={1} letter={word?.charAt(1)} />
      <GuessLetter guessNo={guessNo} letterNo={2} letter={word?.charAt(2)} />
      <GuessLetter guessNo={guessNo} letterNo={3} letter={word?.charAt(3)} />
      <GuessLetter guessNo={guessNo} letterNo={4} letter={word?.charAt(4)} />
    </View>
  )
}

const styles = StyleSheet.create({
  guessContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'space-around',
  }
})

export default GuessRow