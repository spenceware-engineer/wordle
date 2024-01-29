import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { RecoilRoot } from 'recoil'
import RootNavigator from './src/navigation/RootNavigator'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Toast />
          <RootNavigator />
          <StatusBar translucent />
        </SafeAreaView>
      </SafeAreaProvider>
    </RecoilRoot>
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
})
