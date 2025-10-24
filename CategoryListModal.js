import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native';
import { Checkbox } from "react-native-paper";
import CategoryListItem from "./CategoryListItem";
import CustomButton from "./CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";


const CategoryListModal = ({ visible, setVisible }) => {

    const [selectedItemIndex, setSelectedItemIndex] = useState(null);

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
                selected: false
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
                selected: false
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
        <CategoryListItem name={item.name} icon={item.icon} checked={item.selected} onPress={() => handlePressItem(item.id)} />
    )

    const handlePressItem = (id) => {
        setSelectedItemIndex(id);
        setCategories(prev =>
            prev.map(c => ({ ...c, selected: c.id === id }))
        );
        setVisible(false);
    }

    return (
        <Modal animationType="fade" transparent={true} visible={visible}>
            <SafeAreaView style={{ flex: 1, }} edges={['bottom', 'top']}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>CATEGORIES</Text>
                    <Pressable style={({ pressed }) => pressed ? [styles.closeBtn, styles.closeBtnPressed] : styles.closeBtn} onPress={() => setVisible(false)}>
                        <Ionicons name="close" size={26} color="#527187" />
                    </Pressable>
                </View>
                <View style={styles.flatListView}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={<Text>There is no category</Text>}
                    />
                </View>

            </SafeAreaView>

        </Modal>

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
    titleContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: "white",
        borderBottomColor: "#527187",
        borderBottomWidth: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    title: {
        fontSize: 16,
        color: "#527187",
        fontWeight: 'bold'
    },

    closeBtn: {
        padding: 10,
        position: 'absolute',
        right: 6,
        top: 8
    },
    closeBtnPressed: {
        opacity: 0.75
    },
    flatListView: {
        backgroundColor: "white", paddingHorizontal: 16, paddingTop: 16, flex: 1
    }

});