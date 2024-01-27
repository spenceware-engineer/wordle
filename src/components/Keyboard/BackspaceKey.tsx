import {
  Pressable,
  StyleSheet,
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { useSetRecoilState } from 'recoil'
import currentGuessState from 'recoil/currentGuessAtom'

const BackspaceKey = () => {
  const setCurrentGuess = useSetRecoilState(currentGuessState)

  const removeLetter = () => {
    setCurrentGuess(prevGuess => prevGuess.length ? prevGuess.slice(0, -1) : prevGuess)
  }

  return (
    <Pressable onPress={removeLetter} style={styles.container}>
      <FontAwesomeIcon style={styles.icon} size={32} icon={faDeleteLeft} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderColor: '#551E85',
    borderWidth: 1,
    height: 48,
    width: 64,
    margin: 3,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#551E85'
  }
})

export default BackspaceKey