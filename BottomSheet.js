import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import CategoryListItem from "./CategoryListItem";


const BottomSheet = ({ modalVisible, setModalVisible }) => {

    const [categories, setCategories] = useState(
        [
            {
                id: 1,
                icon: "briefcase-outline",
                name: "Work",
                selected: false
            },
            {
                id: 2,
                icon: "school-outline",
                name: "Study",
                selected: false
            },
            {
                id: 3,
                icon: "barbell-outline",
                name: "Gym",
                selected: false
            },
            {
                id: 4,
                icon: "medkit-outline",
                name: "Health",
                selected: true
            },
            {
                id: 5,
                icon: "paw-outline",
                name: "Pet",
                selected: false
            },
            {
                id: 6,
                icon: "calendar-outline",
                name: "Meeting",
                selected: false
            },
            {
                id: 7,
                icon: "airplane-outline",
                name: "Trip",
                selected: false
            },
            {
                id: 8,
                icon: "mail-outline",
                name: "Email",
                selected: false
            },
            {
                id: 9,
                icon: "car-outline",
                name: "Car",
                selected: true
            },
            {
                id: 10,
                icon: "wallet-outline",
                name: "Wallet",
                selected: false
            },
            {
                id: 11,
                icon: "fish-outline",
                name: "Aquarium",
                selected: false
            },
            {
                id: 12,
                icon: "gift-outline",
                name: "Gift",
                selected: false
            },
        ]
    );

    const renderItem = ({ item }) => (
        <CategoryListItem name={item.name} icon={item.icon} checked={item.selected} />
    )

    return (
        <View>
            <Modal transparent visible={modalVisible} animationType="slide" statusBarTranslucent>
                <View style={styles.container}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>CATEGORIES</Text>
                            <Pressable style={({ pressed }) => pressed ? [styles.closeBtn, styles.closeBtnPressed] : styles.closeBtn} onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={26} color="#527187" />
                            </Pressable>
                        </View>
                        <View style={{ backgroundColor: "rgba(255, 255, 255, 1)", flex: 1, padding: 10 }}>
                            <FlatList
                                data={categories}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                ListEmptyComponent={<Text>There is no category</Text>}
                            />
                        </View>
                        <Pressable style={({ pressed }) => pressed ? [styles.applyBtn, styles.applyBtnPressed] : styles.applyBtn} onPress={() => { console.log("TEST") }}>
                            <Text style={styles.applyTxt}>Apply</Text>
                        </Pressable>
                    </View>
                </View>

            </Modal>
        </View>
    );
}

export default BottomSheet;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a9a9a9a9",
        justifyContent: 'center'
    },
    categoryContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        justifyContent: "space-between",
        // alignItems: 'flex-end',
        paddingTop: 50,
    },
    titleContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: "white",
        borderBottomColor: "#527187",
        borderBottomWidth: 1
    },

    title: {
        fontSize: 20,
        color: "#527187",
        fontWeight: 'bold'
    },

    applyBtn: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
        padding: 15,
        backgroundColor: "#5f8aa9ff"
    },
    applyBtnPressed: {
        opacity: 0.75
    },
    closeBtn: {
        // marginRight: 16,
        //backgroundColor: "#527187",
        padding: 10,
        //borderRadius: 24,
        position: 'absolute',
        right: 6
    },
    closeBtnPressed: {
        opacity: 0.75
    },
    applyTxt: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})