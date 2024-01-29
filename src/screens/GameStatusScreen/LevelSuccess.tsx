import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import gameStatusState from 'recoil/gameStatusAtom'
import guessesState from 'recoil/guessesAtom'
import guessNumberState from 'recoil/guessNumberAtom'
import currentGuessState from 'recoil/currentGuessAtom'
import hitsState from 'recoil/hitsAtom'
import currentWordState from 'recoil/currentWordAtom'
import currentUserState from 'recoil/currentUserAtom'
import { completeWord } from 'utils/requests'
import currentScoreState from 'recoil/currentScoreAtom'

const LevelSuccess = () => {
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  const setGameStatus = useSetRecoilState(gameStatusState)
  const setGuesses = useSetRecoilState(guessesState)
  const setGuessNumber = useSetRecoilState(guessNumberState)
  const setHits = useSetRecoilState(hitsState)
  const setCurrentScore = useSetRecoilState(currentScoreState)
  const setCurrentWord = useSetRecoilState(currentWordState)
  const currentWord = useRecoilValue(currentWordState)
  const currentUser = useRecoilValue(currentUserState)

  const startNextLevel = async () => {
    setGuesses([])
    setCurrentGuess('')
    setGuessNumber(0)
    setHits({})
    try {
      const {
        word,
        score,
        data,
        status
      } = await completeWord(currentUser, currentWord)
      if (status === 500) {
        throw new Error(JSON.stringify(data))
      }
      if (word) setCurrentWord(word)
      score ?? setCurrentScore(score)
    } catch (e) {
      console.log(e)
    }
    setGameStatus('playing')
  }

  return (
    <View style={styles.resultContainer}>
      <Text
        style={styles.winText}
      >
        YOU WON!
      </Text>
      <Pressable
        onPress={startNextLevel}
        style={styles.continueButton}
      >
        <Text style={styles.buttonText}>
          CONTINUE
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    borderColor: 'green',
    borderWidth: 5,
    width: '85%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  winText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
  continueButton: {
    borderRadius: 15,
    padding: 10,
    margin: 10,
    backgroundColor: '#7B2CBF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#551E85',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    paddingRight: 10,
    paddingLeft: 10,
  },
})

export default LevelSuccess