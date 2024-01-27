import {
  StyleSheet,
  View,
} from 'react-native'
import BackspaceKey from './BackspaceKey'
import Key from './Key'

interface KeyboardRowProps {
  keys: string
}

const KeyboardRow = ({ keys }: KeyboardRowProps) => {
  return (
    <View style={styles.container}>
      {keys.split('').map(key => {
        if (key === '<') return <BackspaceKey key='backspace' />
        return <Key key={key} letter={key} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }
})

export default KeyboardRow