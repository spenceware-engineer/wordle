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

const LevelFail = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.failText}>
            ROUND OVER
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>
                RETRY
              </Text>
            </Pressable>
            <Pressable style={styles.button}>
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