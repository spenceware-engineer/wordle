import Game from './GameStatusScreen/Game'
import LevelFail from './GameStatusScreen/LevelFail'
import LevelSuccess from './GameStatusScreen/LevelSuccess'
import { useRecoilValue } from 'recoil'
import gameStatusState from 'recoil/gameStatusAtom'

const Play = () => {
  const gameStatus = useRecoilValue(gameStatusState)

  if (gameStatus === 'playing') {
    return <Game />
  } else if (gameStatus === 'win') {
    return <LevelSuccess />
  } else if (gameStatus === 'lose') {
    return <LevelFail />
  } else {
    return <Game />
  }
}

export default Play