import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import SearchTextinput from './SearchTextInput';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <SearchTextinput />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
   // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
