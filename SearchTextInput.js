import React from "react";
import { TextInput, StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchTextinput = () => {

    return (
        <View style={styles.inputContainer}>
            <View style={styles.wrapper}>
                <View style={styles.searchIconConatiner}>
                    <Ionicons name="search" size={24} color="#709ab8" style={{ top: 10, left: 10 }} />
                </View>
                <TextInput placeholder="Search the goal" style={styles.textInput} />
                <Pressable  style={({ pressed }) => [styles.cancelIconConatiner, pressed && styles.cancelIconConatinerPressed]} onPress={() => {console.log('Cancel')}}>
                    <Ionicons name="close" size={24} color="#709ab8"  />
                </Pressable>
            </View>

            <Pressable style={({ pressed }) => [styles.filterButton, pressed && styles.filteredButtonPressed]}>
                <Ionicons name="filter" size={24} color="white" />
            </Pressable>

        </View>
    );
}

export default SearchTextinput;

const styles = StyleSheet.create({

    inputContainer: {
        flexDirection: 'row',
    },
    textInput: {
        borderColor: '#709ab8',
        borderWidth: 1,
        padding: 10,
        paddingLeft: 40,
        borderRadius: 10,
        flex: 1,
        zIndex: 1
    },
    filterButton: {
        backgroundColor: '#527187',
        justifyContent: 'center',
        padding: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
    filteredButtonPressed: {
        opacity: 0.75
    },
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    searchIconConatiner: {
        height: 45,
        width: 40,
        backgroundColor: 'transparent',
        zIndex: 2,
        position: 'absolute'
    },
        cancelIconConatiner: {
        height: 45,
        width: 45,
        backgroundColor: 'transparent',
        zIndex: 2,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0,
    },

       cancelIconConatinerPressed: {
       backgroundColor: '#527187',
       opacity: 0.1,
         borderRadius: 22
    }
});
