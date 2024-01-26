import { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context'
import { useLinkTo } from '@react-navigation/native'
import {
  isValidPassword,
  isValidUsername,
  passwordMatch
} from '../utils/validations'

const Register = () => {
  const linkTo = useLinkTo()
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confPwd, setConfPwd ] = useState('')
  const [ usernameErrors, setUsernameErrors ] = useState<string[]>([])
  const [ passwordErrors, setPasswordErrors ] = useState<string[]>([])
  const [ confPwdErrors, setConfPwdErrors ] = useState<string[]>([])

  const changeUsername = (un: string) => {
    setUsernameErrors([])
    setUsername(un)
  }

  const changePassword = (pw: string) => {
    setPasswordErrors([])
    setPassword(pw)
  }

  const changeConfPwd = (cpw: string) => {
    setConfPwdErrors([])
    setConfPwd(cpw)
  }

  const handleSubmit = () => {
    setUsernameErrors(isValidUsername(username))
    setPasswordErrors(isValidPassword(password))
    setConfPwdErrors(passwordMatch(password, confPwd))
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <Text
            style={
              usernameErrors.length
                ? styles.inputLabelError
                : styles.inputLabel
            }
          >
            USERNAME
          </Text>
          <TextInput
            style={
              usernameErrors.length
                ? styles.inputError
                : styles.input
            }
            onChangeText={changeUsername}
            value={username}
          />
          <View style={styles.errorContainer}>
            {usernameErrors.map(err => {
              return (
                <Text
                  style={styles.errorText}
                  key={`unErr-${err.split(' ').join('_')}`}
                >
                  {err}
                </Text>
              )
            })}
          </View>
          <Text
            style={
              passwordErrors.length
                ? styles.inputLabelError
                : styles.inputLabel
            }
          >
            PASSWORD
          </Text>
          <TextInput
            secureTextEntry
            style={
              passwordErrors.length
                ? styles.inputError
                : styles.input
            }
            onChangeText={changePassword}
            value={password}
          />
          <View style={styles.errorContainer}>
            {passwordErrors.map(err => {
              return (
                <Text
                  style={styles.errorText}
                  key={`pwdErr-${err.split(' ').join('_')}`}
                >
                  {err}
                </Text>
              )
            })}
          </View>
          <Text
            style={
              confPwdErrors.length
                ? styles.inputLabelError
                : styles.inputLabel
            }
          >
            CONFIRM PASSWORD
          </Text>
          <TextInput
            secureTextEntry
            style={
              confPwdErrors.length
                ? styles.inputError
                : styles.input
            }
            onChangeText={changeConfPwd}
            value={confPwd}
          />
          <View style={styles.errorContainer}>
            {confPwdErrors.map(err => {
              return (
                <Text
                  style={styles.errorText}
                  key={`confPwdErr-${err.split(' ').join('_')}`}
                >
                  {err}
                </Text>
              )
            })}
          </View>
          <Pressable
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </Pressable>
          <Pressable style={styles.switchAuthLink} onPress={() => linkTo('/Login')}>
            <Text style={styles.switchAuthText}>
              Already have an account? Sign In
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
  },
  inputLabelError: {
    fontWeight: 'bold',
    color: 'red',
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    padding: 10,
  },
  errorContainer: {
    marginBottom: 10,
  },
  errorText: {
    color: 'red'
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

export default Register