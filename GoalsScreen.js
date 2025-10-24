import React from "react";
import {Modal, StyleSheet, Button, View} from "react-native";
import SearchTextinput from "./SearchTextInput";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { FAB } from "react-native-paper";
import CategoryListModal from "./CategoryListModal";
import BottomSheet from "./BottomSheet";
import AddGoalModal from "./AddGoalModal";
import GoalsList from "./GoalsList";

const GoalsScreen = () => {

    const [modalVisible, setModalVisible] = useState(false);
    const [addGoalModalVisible, setAddGoalModalVisible] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");

    return(
        <>
        <SearchTextinput setModalVisible = {setModalVisible} setKeyWord = {setSearchKeyword} keyWord = {searchKeyword}/>
        <GoalsList keyWord = {searchKeyword}/>
        <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <FAB icon="plus" label="Add" style = {styles.fab}  onPress={() => {setAddGoalModalVisible(true)}}/>
        <AddGoalModal visible = {addGoalModalVisible} setVisible = {setAddGoalModalVisible} />
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

