import React from "react";
import {Modal, StyleSheet, Button, View} from "react-native";
import SearchTextinput from "./SearchTextInput";
import { useState } from "react";

const GoalsScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <>
        <SearchTextinput modalVisible = {modalVisible}/>
        <Button title="Open Modal" onPress={() => {setModalVisible(true)}}/>
        {/* <Modal animationType="slide" transparent= {true} visible = {modalVisible} onRequestClose={() => setModalVisible(false)}>

            <View style = {{alignItems: "center", justifyContent: "center", backgroundColor: "#7E7E7E49", width: "100%", height: "100%"}}>
              <View style = {{height: 100, width: 200, backgroundColor: "green", display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                <Button title="CLOSE"  onPress={() => {setModalVisible(false)}} />
              </View>
            </View>

        </Modal> */}
        </>
    )
}

export default GoalsScreen;

