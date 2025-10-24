import React, { useState }  from "react";
import {Text, View, Pressable, StyleSheet} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const SelectCategoryPicker = ({onPress}) => {
    

    return(
        <Pressable style={({pressed}) => pressed ? [styles.container, styles.containerPressed] : styles.container} onPress={() => onPress(true)}>
            <View>
             <Text style={styles.pickerText}>Select category</Text>
            </View>
            <Ionicons name="chevron-down-outline" size={20} color="#527187" />
        </Pressable>
    );
}

export default SelectCategoryPicker;

const styles = StyleSheet.create({

    container:{
        height: 60,
        backgroundColor: "#dcdcdcff",
        borderRadius: 10,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: "center",  
        paddingHorizontal: 12,
        marginHorizontal: 12,
        justifyContent: "space-between",
        borderColor: "#5f8aa9ff",
        borderWidth: 1
    },

    containerPressed: {
        opacity: 0.75
    },

    pickerText: {
        color: "#6a6a6aff", 
        fontWeight: "400",
        fontSize: 18,
        letterSpacing: 0.5,
        textAlign: "left",
    }
});


