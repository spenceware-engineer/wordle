import {atom, RecoilState} from 'recoil'

const hitsState: RecoilState<any> = atom({
  key: 'hits',
  default: {}
})

export default hitsState