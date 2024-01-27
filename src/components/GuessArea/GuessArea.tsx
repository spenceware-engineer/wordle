import {
  View,
} from 'react-native'
import GuessRow from './GuessRow'

const GuessArea = () => {
  return (
    <View>
      <GuessRow guessNo={0} />
      <GuessRow guessNo={1} />
      <GuessRow guessNo={2} />
      <GuessRow guessNo={3} />
      <GuessRow guessNo={4} />
      <GuessRow guessNo={5} />
    </View>
  )
}

export default GuessArea