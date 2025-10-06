import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import SearchTextinput from './SearchTextInput';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GoalsScreen from './GoalsScreen';
import FilterModal from './FilterModal';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style = {{flex: 1, backgroundColor: "transparent"}} edges={["top", "left", "right", "bottom"]}>
        <View style={styles.container}>
          <GoalsScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
     padding: 16,
     backgroundColor: "transparent",
    //  height: "100%"
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
