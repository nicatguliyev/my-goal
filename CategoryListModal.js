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
                    <CustomButton backgroundColor="red" borderRadius={10} textColor="white" fontWeight
                        ="bold" title="Apply" />
                    <CustomButton backgroundColor="green" borderRadius={10} textColor="white" fontWeight
                        ="bold" title="Close" />
                </View>
            </View>
        </View>
    );
}

export default CategoryListModal;

const styles = StyleSheet.create({

    buttonsView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 12,
        paddingTop: 25,
        paddingHorizontal: 12
    },
});