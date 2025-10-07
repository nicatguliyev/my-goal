import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import SearchTextinput from './SearchTextInput';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import GoalsScreen from './GoalsScreen';
import FilterModal from './FilterModal';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import CategoryListModal from './CategoryListModal';


export default function App() {

  // useEffect(() => {
  //   NavigationBar.setBackgroundColorAsync("red");
  // }, []);


  return (
    <SafeAreaProvider>
      <SafeAreaView style = {{flex: 1, backgroundColor: "white" }} edges={["top", "bottom"]}>
        <View style={styles.container}>
          <GoalsScreen />
          {/* <CategoryListModal /> */}
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
     backgroundColor: "white",
  },
});
