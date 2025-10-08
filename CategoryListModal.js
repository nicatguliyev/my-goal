import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Checkbox } from "react-native-paper";
import CategoryListItem from "./CategoryListItem";
import CustomButton from "./CustomButton";


const CategoryListModal = ({ setModalVisibility }) => {


    return (
        <View style={{ backgroundColor: "grey", width: "100%", height: "100%", justifyContent: "center", paddingHorizontal: 16 }}>
            <View style={{ backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10 }}>

                <CategoryListItem />
                <CategoryListItem />
                <CategoryListItem />
                <CategoryListItem />

                <View style={styles.buttonsView}>
                    {/* <Pressable style={({ pressed }) => [styles.applyButton, pressed && styles.applybuttonPressed]}>
                        <Text style={styles.buttonText}>Apply</Text>
                    </Pressable>

                    <Pressable style={({ pressed }) => [styles.closeBtn, pressed && styles.closeBtnPressed]}>
                        <Text style={styles.buttonText}>Close</Text>
                    </Pressable> */}

                    <CustomButton  backgroundColor = "red" borderRadius = {10} textColor = "white" fontWeight
                     = "bold" title = "Apply"/>
                     <CustomButton  backgroundColor = "green" borderRadius = {10} textColor = "white" fontWeight
                     = "bold" title = "Close"/>
                </View>

            </View>

        </View>

    );
}

export default CategoryListModal;

const styles = StyleSheet.create({

    cateGoryListView: {
        flexDirection: "row",
        alignItems: "center"
    },

    listItemText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "500",
        color: "grey"
    },

    listItemBtn: {
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3
    },

    buttonsView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 12,
        paddingTop: 25,
        paddingHorizontal: 12
    },

    applyButton: {
        backgroundColor: "green",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10
    },
    closeBtn: {
        backgroundColor: "red",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10
    },
    applybuttonPressed: {
        backgroundColor: "green",
        opacity: 0.6,
        borderRadius: 10
    },
    closeBtnPressed: {
        backgroundColor: "red",
        opacity: 0.6,
        borderRadius: 10
    }, 
    buttonText:  {
        color: "white",
        fontWeight: "bold"
    }
});