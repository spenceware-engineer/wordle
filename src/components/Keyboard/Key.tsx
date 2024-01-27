import {
  StyleSheet,
  Text,
  Pressable,
} from 'react-native'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import hitsState from '../../recoil/hitsAtom'
import currentGuessState from 'recoil/currentGuessAtom'

interface KeyProps {
  letter: string
}

const Key = ({ letter }: KeyProps) => {
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  const hits = useRecoilValue(hitsState)
  const hitContainerStyle = (hits[ letter ] === 0
    ? styles.notInWordContainer
    : hits[ letter ] === 1
      ? styles.wrongPlaceContainer
      : hits[ letter ] === 2
        ? styles.rightPlaceContainer
        : styles.regularContainer)
  const hitTextStyle = (hits[ letter ] === 0
    ? styles.notInWordText
    : hits[ letter ] === 1
      ? styles.wrongPlaceText
      : hits[ letter ] === 2
        ? styles.rightPlaceText
        : styles.regularText)

  const addLetter = (letter: string) => {
    setCurrentGuess(prevGuess => prevGuess.length === 5 ? prevGuess : prevGuess.concat(letter))
  }

  return (
    <Pressable
      style={hitContainerStyle}
      onPress={() => addLetter(letter)}
    >
      <Text
        style={hitTextStyle}
      >
        {letter}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  regularContainer: {
    backgroundColor: '#FFF',
    borderColor: '#551E85',
    borderWidth: 1,
    height: 48,
    width: 32,
    margin: 3,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regularText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#551E85',
  },
  wrongPlaceContainer: {
    backgroundColor: 'orange',
    borderColor: 'orange',
    borderWidth: 1,
    height: 48,
    width: 32,
    margin: 3,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrongPlaceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  notInWordContainer: {
    backgroundColor: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    height: 48,
    width: 32,
    margin: 3,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notInWordText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  rightPlaceContainer: {
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 1,
    height: 48,
    width: 32,
    margin: 3,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightPlaceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  }
})

export default Key