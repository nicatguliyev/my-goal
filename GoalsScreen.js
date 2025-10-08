import React from "react";
import {Modal, StyleSheet, Button, View} from "react-native";
import SearchTextinput from "./SearchTextInput";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { FAB } from "react-native-paper";
import CategoryListModal from "./CategoryListModal";

const GoalsScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <>
        <SearchTextinput setModalVisible = {setModalVisible}/>
        <Modal animationType="fade" transparent= {true} visible = {modalVisible} onRequestClose={() => setModalVisible(false)}>
            <CategoryListModal setModalVisible={setModalVisible}/>
        </Modal>
        <FAB icon="plus" label="Add" style = {styles.fab} />
        </>
    )
}

export default GoalsScreen;

const styles = StyleSheet.create({
   fab: {
    position: "absolute",
    right: 16,
    bottom: 16
   }
});

