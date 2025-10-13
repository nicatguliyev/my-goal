import React from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";


const CategoryListItem = ({name , icon, checked, onPress}) => {

    return (
        <>
            <Pressable style={checked ? styles.selectedListItemBtn : styles.listItemBtn} onPress={onPress}>
                <View style={styles.cateGoryListView}>
                    <View style={styles.row}>
                        <Ionicons name={icon} size={28} color={checked ? "green" : "grey"} />
                        <Text style={checked ? styles.selectedListItemText : styles.listItemText}>{name}</Text>
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

        selectedListItemText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: "500",
        color: "green"
    },

    listItemBtn: {
        paddingVertical: 10,
        borderColor: '#5271874b',
        borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 10,
        marginBottom: 10
    },

    selectedListItemBtn: {
        paddingVertical: 10,
        borderColor: 'green',
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