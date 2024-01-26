import {
  StyleSheet,
  View,
} from 'react-native'
import GuessLetter from './GuessLetter'

interface GuessRowProps {
  guess: string
}

const GuessRow = ({ guess }: GuessRowProps) => {
  let letters = guess.split('')
  return (
    <View style={styles.guessContainer}>
      <GuessLetter letter={letters?.[ 0 ] || ''} />
      <GuessLetter letter={letters?.[ 1 ] || ''} />
      <GuessLetter letter={letters?.[ 2 ] || ''} />
      <GuessLetter letter={letters?.[ 3 ] || ''} />
      <GuessLetter letter={letters?.[ 4 ] || ''} />
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