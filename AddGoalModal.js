import React from "react";
import { useState } from "react";
import { Modal, Text, View, Pressable, StyleSheet } from 'react-native';


const AddGaolModal = ({ visible }) => {


    return (
        <View>
            <Modal visible={visible} transparent={true} statusBarTranslucent={true} animationType="slide">


                <View style = {styles.container}>
                    <View style={{ width: "100%", height: 200, backgroundColor: "green" }}>
                      <Pressable>
                        <Text>CLOSE</Text>
                      </Pressable>
                    </View>
                </View>



            </Modal>
        </View>
    );
}

export default AddGaolModal;


const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: "transparent",
        height: "100%"
    },

})