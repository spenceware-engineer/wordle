import { useState } from 'react'
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { useLinkTo } from '@react-navigation/native'

const Login = () => {
  const linkTo = useLinkTo()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = () => {
    setUsername('')
    setPassword('')
    linkTo('/Play')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>USERNAME</Text>
          <TextInput
            style={styles.input}
            onChangeText={un => setUsername(un)}
            value={username}
          />
          <Text style={styles.inputLabel}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={pw => setPassword(pw)}
            value={password}
          />
          <Pressable
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>SIGN IN</Text>
          </Pressable>
          <Pressable style={styles.switchAuthLink} onPress={() => linkTo('/Register')}>
            <Text style={styles.switchAuthText}>
              Don't have an account? Sign Up
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
  formContainer: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    borderColor: '#551E85',
    borderWidth: 5,
    width: '85%',
  },
  inputLabel: {
    fontWeight: 'bold',
    color: '#551E85'
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
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
  },
  switchAuthLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchAuthText: {
    color: '#551E85',
    textDecorationLine: 'underline',
  },
})

export default Login