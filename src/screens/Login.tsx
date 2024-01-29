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
} from '../utils/validations'
import { loginUser } from 'utils/requests'
import { useSetRecoilState } from 'recoil'
import currentWordState from 'recoil/currentWordAtom'
import currentUserState from 'recoil/currentUserAtom'
import currentScoreState from 'recoil/currentScoreAtom'
import gameStatusState from 'recoil/gameStatusAtom'

const Login = () => {
  const setCurrentWord = useSetRecoilState(currentWordState)
  const setCurrentUser = useSetRecoilState(currentUserState)
  const setCurrentScore = useSetRecoilState(currentScoreState)
  const setGameStatus = useSetRecoilState(gameStatusState)
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ usernameErrors, setUsernameErrors ] = useState<string[]>([])
  const [ passwordErrors, setPasswordErrors ] = useState<string[]>([])

  const changeUsername = (un: string) => {
    setUsername(un)
  }

  const changePassword = (pw: string) => {
    setPasswordErrors([])
    setPassword(pw)
  }

  const handleSubmit = async () => {
    setPasswordErrors(isValidPassword(password))
    if (!passwordErrors.length) {
      try {
        const {
          message,
          status,
          word,
          username: un,
          score,
          data,
        } = await loginUser(username, password)
        switch (status) {
          case 200:
            setCurrentUser(un)
            setCurrentScore(score)
            setCurrentWord(word)
            setGameStatus('playing')
            break
          case 404:
            setUsernameErrors([ message ])
            break
          case 403:
            setPasswordErrors([ message ])
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
      <Text style={styles.inputLabel}>USERNAME</Text>
      <TextInput
        style={styles.input}
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
        style={
          passwordErrors.length
            ? styles.inputError
            : styles.input
        }
        secureTextEntry
        onChangeText={changePassword}
        value={password}
      />
      <View style={styles.errorContainer}>
        {passwordErrors.map(err => {
          return (
            <Text
              style={styles.errorText}
              key={`pwErr-${err.split(' ').join('_')}`}
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
        <Text style={styles.buttonText}>SIGN IN</Text>
      </Pressable>
      <Pressable style={styles.switchAuthLink} onPress={() => setGameStatus('register')}>
        <Text style={styles.switchAuthText}>
          Don't have an account? Sign Up
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
    color: '#551E85',
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
    color: 'red',
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