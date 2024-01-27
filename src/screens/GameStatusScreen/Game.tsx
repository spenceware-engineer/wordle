import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context'
import {
  StyleSheet,
} from 'react-native'
import TopDisplay from '../../components/TopDisplay'
import BottomOptions from '../../components/BottomOptions'
import GuessArea from '../../components/GuessArea/GuessArea'
import Keyboard from '../../components/Keyboard/Keyboard'

const Game = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TopDisplay />
        <GuessArea />
        <Keyboard />
        <BottomOptions />
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
    padding: 20,
    justifyContent: 'space-between'
  },
})

export default Game

