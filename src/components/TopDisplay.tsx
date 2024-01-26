import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { useRecoilValue } from 'recoil'
import currentScoreState from '../recoil/currentScoreAtom'
import currentUserState from '../recoil/currentUserAtom'

const TopDisplay = () => {
  const username = useRecoilValue(currentUserState)
  const score = useRecoilValue(currentScoreState)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`SCORE: ${score}`}</Text>
      <Text style={styles.text}>{`${username.toUpperCase()}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  }
})

export default TopDisplay