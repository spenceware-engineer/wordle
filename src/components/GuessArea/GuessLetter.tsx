import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface GuessLetterProps {
  letter: string
}

const GuessLetter = ({ letter }: GuessLetterProps) => {
  return (
    <View style={styles.letterPlace}>
      <Text style={styles.letter}>{letter || ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  letterPlace: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#551E85',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  letter: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#551E85',
  }
})

export default GuessLetter