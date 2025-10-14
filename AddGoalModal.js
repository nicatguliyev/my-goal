import React from "react";
import { useState } from "react";
import { Modal, Text, View, Pressable, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import SelectCategoryPicker from "./SelectCategoryPicker";


const AddGoalModal = ({ visible, setVisible }) => {


    return (
        <View>
            <Modal visible={visible} transparent={true} statusBarTranslucent={true} animationType="slide">


                <View style={styles.container}>
                    <View style={{ width: "100%", height: 500, backgroundColor: "white" }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>NEW GOAL</Text>
                            <Pressable style={({ pressed }) => pressed ? [styles.closeBtn, styles.closeBtnPressed] : styles.closeBtn} onPress={() => setVisible(false)}>
                                <Ionicons name="close" size={26} color="#527187" />
                            </Pressable>
                        </View>
                        <View style={{ backgroundColor: "rgba(255, 255, 255, 1)",   }}></View>
                        <TextInput placeholder="Enter your goal title" style={styles.titleTextInput} placeholderTextColor={"#6a6a6aff"}/>
                        <TextInput placeholder="Enter your goal description" placeholderTextColor={"#6a6a6aff"} style={styles.descriptionTextInput} scrollEnabled={true} multiline={true} numberOfLines={10} />

                        <SelectCategoryPicker />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default AddGoalModal;


const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "transparent",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)"
    },

    titleTextInput: {
        backgroundColor: "#dcdcdcff",
        marginHorizontal: 12,
        marginVertical: 16,
        padding: 10,
        paddingVertical: 18,
        fontSize: 18,
        borderRadius: 10
    },
    descriptionTextInput: {
        backgroundColor: "#dcdcdcff",
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 10,
        fontSize: 18,
        borderRadius: 10,
        height: 150,
        textAlignVertical: "top",
    },
    titleContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: "white",
        borderBottomColor: "#527187",
        borderBottomWidth: 1
    },

    title: {
        fontSize: 20,
        color: "#527187",
        fontWeight: 'bold'
    },
    closeBtn: {
        padding: 10,
        position: 'absolute',
        right: 6
    },
    closeBtnPressed: {
        opacity: 0.75
    },
})
