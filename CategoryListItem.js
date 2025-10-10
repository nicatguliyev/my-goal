import React from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";


const CategoryListItem = ({name , icon, checked, onPress}) => {

    return (
        <>
            <Pressable style={styles.listItemBtn} onPress={onPress}>
                <View style={styles.cateGoryListView}>
                    <View style={styles.row}>
                        <Ionicons name={icon} size={28} color="grey" />
                        <Text style={styles.listItemText}>{name}</Text>
                    </View>
                    <Checkbox color="green" uncheckedColor="grey" status={checked ? "checked" : "unchecked"} />
                </View>
            </Pressable>
        </>
    );
}

export default CategoryListItem;

const styles = StyleSheet.create({

    cateGoryListView: {
        flexDirection: "row",
        alignItems: "center",
    },

    listItemText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "500",
        color: "grey"
    },

    listItemBtn: {
        paddingVertical: 10,
        borderColor: '#5271874b',
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: "",
        paddingLeft: 12
    }
});