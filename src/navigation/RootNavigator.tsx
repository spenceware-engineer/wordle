import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Play from '../screens/Play'
import { useRecoilValue } from 'recoil'
import currentUserState from 'recoil/currentUserAtom'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  const isLoggedIn = useRecoilValue(currentUserState)

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Play" : "Login"} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Play"
        component={Play}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator