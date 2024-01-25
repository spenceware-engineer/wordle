import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context'
import {
  StyleSheet,
  Text,
} from 'react-native'


const Play = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>PLAY!</Text>
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
})

export default Play