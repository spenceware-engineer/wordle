import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import currentGuessState from 'recoil/currentGuessAtom'
import gameStatusState from 'recoil/gameStatusAtom'
import guessesState from 'recoil/guessesAtom'
import guessNumberState from 'recoil/guessNumberAtom'
import currentWordState from 'recoil/currentWordAtom'
import hitsState from 'recoil/hitsAtom'
import { generateWord } from 'utils/requests'
import currentUserState from 'recoil/currentUserAtom'

const BottomOptions = () => {
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  const setGameStatus = useSetRecoilState(gameStatusState)
  const setGuesses = useSetRecoilState(guessesState)
  const setGuessNumber = useSetRecoilState(guessNumberState)
  const setHits = useSetRecoilState(hitsState)
  const setCurrentWord = useSetRecoilState(currentWordState)
  const currentGuess = useRecoilValue(currentGuessState)
  const currentWord = useRecoilValue(currentWordState)
  const guessNum = useRecoilValue(guessNumberState)
  const currentUser = useRecoilValue(currentUserState)
  const hits = useRecoilValue(hitsState)

  const submitGuess = async () => {
    if (currentGuess.length === 5) {
      if (currentWord === currentGuess) {
        setGameStatus('win')
      }
      if (guessNum === 5 && currentGuess.length === 5) {
        setGameStatus(currentWord === currentGuess ? 'win' : 'lose')
      }
      if (currentGuess.length === 5) {
        let newHits = { ...hits }
        currentGuess.split('').forEach((ltr, i) => {
          if (currentWord.charAt(i) === ltr) {
            newHits[ ltr ] = 2
          } else if (!currentWord.includes(ltr)) {
            newHits[ ltr ] = 0
          } else if (newHits[ ltr ] !== 2) {
            newHits[ ltr ] = 1
          }
        })
        setHits(newHits)
        setGuesses((gs: any) => guessNum < 5 ? [ ...gs, currentGuess ] : [])
        setGuessNumber(guessNo => guessNo < 5 ? guessNo + 1 : 0)
        setCurrentGuess('')
      }
    }
  }

  const startNextLevel = async () => {
    setGuesses([])
    setCurrentGuess('')
    setGuessNumber(0)
    setHits({})
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
    setGameStatus('playing')
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={startNextLevel}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          SKIP
        </Text>
      </Pressable>
      <Pressable
        onPress={submitGuess}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          SUBMIT
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: '40%',
    backgroundColor: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#551E85',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})

export default BottomOptions