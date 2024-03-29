import { useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import {
  isValidPassword,
  isValidUsername,
  passwordMatch
} from '../utils/validations'
import { registerUser } from 'utils/requests'
import { useSetRecoilState } from 'recoil'
import currentWordState from 'recoil/currentWordAtom'
import currentUserState from 'recoil/currentUserAtom'
import gameStatusState from 'recoil/gameStatusAtom'

const Register = () => {
  const setCurrentWord = useSetRecoilState(currentWordState)
  const setCurrentUser = useSetRecoilState(currentUserState)
  const setGameStatus = useSetRecoilState(gameStatusState)
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

  const handleSubmit = async () => {
    setUsernameErrors(isValidUsername(username))
    setPasswordErrors(isValidPassword(password))
    setConfPwdErrors(passwordMatch(password, confPwd))
    if (!usernameErrors.length &&
      !passwordErrors.length &&
      !confPwdErrors.length) {
      try {
        const {
          status,
          data,
          message,
          word,
          username: un,
        } = await registerUser(username, password)
        switch (status) {
          case 409:
            setUsernameErrors([ message ])
            break
          case 201:
            setCurrentWord(word)
            setCurrentUser(un)
            setGameStatus('playing')
            break
          case 500:
            throw new Error(JSON.stringify(data))
        }
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
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
      <Pressable style={styles.switchAuthLink} onPress={() => setGameStatus('login')}>
        <Text style={styles.switchAuthText}>
          Already have an account? Sign In
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
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