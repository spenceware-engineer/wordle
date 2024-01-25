import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { RecoilRoot } from 'recoil'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'

export default function App() {
  return (
    <NavigationContainer>
      <RecoilRoot>
        <RootNavigator />
        <StatusBar translucent />
      </RecoilRoot>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#7b2cbf',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
