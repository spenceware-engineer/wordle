import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context'

const Register = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Hello!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 100,
    width: 100,
    backgroundColor: '#FFF',
  }
})

export default Register