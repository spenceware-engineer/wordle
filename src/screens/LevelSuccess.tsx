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

const LevelSuccess = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text
            style={styles.winText}
          >
            YOU WON!
          </Text>
          <Pressable style={styles.continueButton}>
            <Text style={styles.buttonText}>
              CONTINUE
            </Text>
          </Pressable>
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