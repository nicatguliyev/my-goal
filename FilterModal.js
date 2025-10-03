import React from "react";
import {Text, View, Modal, StyleSheet} from 'react-native';
import { useState } from "react";
import { Checkbox } from "react-native-paper";


const FilterModal = () => {


    return(
        <View style = {styles.modalView}>

            <View style = {styles.categoriesView}>

                <Checkbox status="checked" />
                <Text>ITEM 1</Text>

            </View>

        </View>
    );
}

export default FilterModal;

const styles = StyleSheet.create({

    modalView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#7E7E7E49",
        justifyContent: "center",
        alignItems: "center"
    },
    categoriesView: {
        // width: "",
        marginHorizontal: 36,
        padding: 12,
        backgroundColor: "green"
    }

});

