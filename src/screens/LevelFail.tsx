import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context'
import {
  Pressable,
  Text,
  View,
} from 'react-native'

const LevelFail = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>
            ROUND OVER
          </Text>
          <View>
            <Pressable>
              <Text>
                RETRY
              </Text>
            </Pressable>
            <Pressable>
              <Text>
                NEXT
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default LevelFail