import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context'
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useSetRecoilState } from 'recoil'
import guessesState from 'recoil/guessesAtom'
import currentGuessState from 'recoil/currentGuessAtom'
import guessNumberState from 'recoil/guessNumberAtom'
import gameStatusState from 'recoil/gameStatusAtom'
import hitsState from 'recoil/hitsAtom'

const LevelFail = () => {
  const setGuesses = useSetRecoilState(guessesState)
  const setCurrentGuess = useSetRecoilState(currentGuessState)
  const setGuessNumber = useSetRecoilState(guessNumberState)
  const setGameStatus = useSetRecoilState(gameStatusState)
  const setHits = useSetRecoilState(hitsState)

  const startNextLevel = () => {
    setGuesses([])
    setCurrentGuess('')
    setGuessNumber(0)
    setHits({})
    setGameStatus('playing')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.failText}>
            ROUND OVER
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              onPress={startNextLevel}
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
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7B2CBF',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
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