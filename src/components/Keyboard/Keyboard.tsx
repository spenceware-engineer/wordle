import {
  StyleSheet,
  View,
} from 'react-native'
import KeyboardRow from './KeyboardRow'

const Keyboard = () => {
  return (
    <View style={styles.container}>
      <KeyboardRow keys="qwertyuiop" />
      <KeyboardRow keys="asdfghjkl" />
      <KeyboardRow keys="zxcvbnm<" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})

export default Keyboard