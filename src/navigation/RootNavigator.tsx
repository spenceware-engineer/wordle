import Login from '../screens/Login'
import Register from '../screens/Register'
import Play from '../screens/Play'
import { useRecoilValue } from 'recoil'
import currentUserState from 'recoil/currentUserAtom'
import gameStatusState from 'recoil/gameStatusAtom'

const RootNavigator = () => {
  const isLoggedIn = useRecoilValue(currentUserState)
  const gameStatus = useRecoilValue(gameStatusState)

  return (
    isLoggedIn ? (
      <Play />
    ) : (
      gameStatus === 'login' ? (
        <Login />
      ) : (
        <Register />
      )
    )
  )
}

export default RootNavigator