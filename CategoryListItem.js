import React from "react";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";


const CategoryListItem = () => {

    return (
        <>
            <Pressable style={styles.listItemBtn} onPress={() => { console.log("test") }}>
                <View style={styles.cateGoryListView}>
                    <View style={styles.row}>
                        <Ionicons name="search" size={28} color="grey" />
                        <Text style={styles.listItemText}>Work</Text>
                    </View>
                    <Checkbox color="green" uncheckedColor="grey" status="checked" />
                </View>
            </Pressable>
        </>
    );
}

export default CategoryListItem;

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

    row: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        backgroundColor: "",
        paddingLeft: 12
    }
});