import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const BottomOptions = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          SKIP
        </Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          SUBMIT
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: '40%',
    backgroundColor: 'dodgerblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#551E85',
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})

export default BottomOptions