import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Checkbox } from "react-native-paper";


const CategoryListModal = ({ setModalVisibility }) => {


    return (
        <View style={{ backgroundColor: "grey", width: "100%", height: "100%", justifyContent: "center", paddingHorizontal: 16 }}>
            <View style={{ backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10 }}>
                <Pressable style={styles.listItemBtn} onPress={() => { console.log("test") }}>
                    <View style={styles.cateGoryListView}>
                        <View style={{ flexDirection: "row", alignItems: "center", flex: 1, backgroundColor: "", paddingLeft: 6 }}>
                            <Ionicons name="search" size={12} color="#709ab8" />
                            <Text style={styles.listItemText}>Work</Text>
                        </View>
                        <Checkbox />
                    </View>
                </Pressable>
                <Pressable onPress={() => { console.log("test") }} style={styles.listItemBtn}>
                    <View style={styles.cateGoryListView}>
                        <View style={{ flexDirection: "row", alignItems: "center", flex: 1, backgroundColor: "", paddingLeft: 6 }}>
                            <Ionicons name="search" size={30} color="#709ab8" />
                            <Text style={styles.listItemText}>Work</Text>
                        </View>
                        <Checkbox  style = {{paddingHorizontal: 0}}/>
                    </View>

                </Pressable>

                <Pressable onPress={() => { console.log("test") }} style={styles.listItemBtn}>
                    <View style={styles.cateGoryListView}>
                        <View style={{ flexDirection: "row", alignItems: "center", flex: 1, backgroundColor: "", paddingLeft: 6 }}>
                            <Ionicons name="search" size={30} color="#709ab8" />
                            <Text style={styles.listItemText}>Work</Text>
                        </View>
                        <Checkbox />
                    </View>

                </Pressable>

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
        fontSize: 18,
        marginLeft: 12,
        fontWeight: "500"
    },

    listItemBtn: {
        paddingVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    }



});