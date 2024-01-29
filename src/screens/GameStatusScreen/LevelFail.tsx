import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import guessesState from 'recoil/guessesAtom'
import currentGuessState from 'recoil/currentGuessAtom'
import guessNumberState from 'recoil/guessNumberAtom'
import gameStatusState from 'recoil/gameStatusAtom'
import hitsState from 'recoil/hitsAtom'
import currentUserState from 'recoil/currentUserAtom'
import currentWordState from 'recoil/currentWordAtom'
import { generateWord } from 'utils/requests'

const LevelFail = () => {
  const setGuesses = useSetRecoilState(guessesState)
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  const setGuessNumber = useSetRecoilState(guessNumberState)
  const setGameStatus = useSetRecoilState(gameStatusState)
  const setHits = useSetRecoilState(hitsState)
  const setCurrentWord = useSetRecoilState(currentWordState)
  const currentUser = useRecoilValue(currentUserState)

  const startNextLevel = async () => {
    try {
      const {
        word,
        status,
        data
      } = await generateWord(currentUser)
      if (status === 500) {
        throw new Error(JSON.stringify(data))
      }
      if (word) setCurrentWord(word)
    } catch (e) {
      console.log(e)
    }
    setGuesses([])
    setCurrentGuess('')
    setGuessNumber(0)
    setHits({})
    setGameStatus('playing')
  }

  const restartLevel = () => {
    setGuesses([])
    setCurrentGuess('')
    setGuessNumber(0)
    setHits({})
    setGameStatus('playing')
  }

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.failText}>
        ROUND OVER
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={restartLevel}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            RETRY
          </Text>
        </Pressable>
        <Pressable
          onPress={startNextLevel}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            NEXT
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    borderColor: 'darkorange',
    borderWidth: 5,
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  failText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'darkorange',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    margin: 10,
    backgroundColor: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingRight: 10,
    paddingLeft: 10,
  },
})

export default LevelFail