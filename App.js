import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import SearchTextinput from './SearchTextInput';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GoalsScreen from './GoalsScreen';
import FilterModal from './FilterModal';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      {/* <SearchTextinput /> */}
      <FilterModal />
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
