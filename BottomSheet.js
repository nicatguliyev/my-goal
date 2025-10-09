import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const BottomSheet = ({ modalVisible, setModalVisible }) => {

    return (
        <View>
            <Modal transparent visible={modalVisible} animationType="slide" statusBarTranslucent>
                <View style={styles.container}>
                    <View style={styles.categoryContainer}>
                        <Pressable style={({pressed}) =>  pressed ? [styles.closeBtn, styles.closeBtnPressed] : styles.closeBtn} onPress={() => setModalVisible(false)}>
                            <Ionicons name="close" size={26} color="white" />
                        </Pressable>
                        <Pressable style={({pressed}) =>  pressed ? [styles.applyBtn, styles.applyBtnPressed] : styles.applyBtn} onPress={() => {console.log("TEST") }}>
                            <Text style = {styles.applyTxt}>Apply</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>
        </View>
    );
}

export default BottomSheet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a9a9a9a9",
        justifyContent: 'flex-end'
    },
    categoryContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: 'flex-end',
        paddingTop: 50,
    },
    applyBtn: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
        padding: 15,
        backgroundColor: "#5f8aa9ff"
    },
    applyBtnPressed:{
      opacity: 0.75
    },
    closeBtn: {
        marginRight: 16,
        backgroundColor: "#527187",
        padding: 10,
        borderRadius: 24
    },
    closeBtnPressed: {
        opacity: 0.75
    }, 
    applyTxt: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})