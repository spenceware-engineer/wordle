import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" animated={true} />
      <Text>SCORE: 50</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b2cbf',
    alignItems: 'center',
  },
})
