import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useRecoilValue } from 'recoil'
import currentWordState from '../../recoil/currentWordAtom'
import guessNumberState from 'recoil/guessNumberAtom'

interface GuessLetterProps {
  letter?: string
  guessNo: number
  letterNo: number
}

const GuessLetter = ({
  letter,
  guessNo,
  letterNo,
}: GuessLetterProps) => {
  const currentWord = useRecoilValue(currentWordState)
  const guessNumber = useRecoilValue(guessNumberState)

  const isCurrentGuess = guessNo === guessNumber
  const hitLevel = (
    !letter
      ? -1
      : currentWord.charAt(letterNo) === letter
        ? 2
        : currentWord.includes(letter)
          ? 1
          : 0
  )

  return (
    <View
      style={
        isCurrentGuess
          ? styles.letterContainer
          : hitLevel === 0
            ? styles.letterHit0Container
            : hitLevel === 1
              ? styles.letterHit1Container
              : hitLevel === 2
                ? styles.letterHit2Container
                : styles.letterContainer}
    >
      <Text
        style={
          isCurrentGuess
            ? styles.letter
            : hitLevel === 0
              ? styles.letterHit0
              : hitLevel === 1
                ? styles.letterHit1
                : hitLevel === 2
                  ? styles.letterHit2
                  : styles.letter}
      >
        {letter}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  letterContainer: {
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
  },
  letterHit0Container: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'gray',
  },
  letterHit0: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  letterHit1Container: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'orange',
  },
  letterHit1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  letterHit2Container: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'green',
  },
  letterHit2: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
})

export default GuessLetter