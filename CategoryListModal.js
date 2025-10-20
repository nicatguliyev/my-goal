import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Modal, FlatList } from 'react-native';
import { Checkbox } from "react-native-paper";
import CategoryListItem from "./CategoryListItem";
import CustomButton from "./CustomButton";


const CategoryListModal = ({ setModalVisibility }) => {

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
        <CategoryListItem name={item.name} icon={item.icon} checked={item.selected} />
    )

    return (
        <Modal animationType="slide" transparent={true} visible={true}>
            <View style={{ backgroundColor: "white", width: "100%", height: "100%", justifyContent: "center", paddingHorizontal: 16 }}>
                <View style={{ backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10 }}>
                    <FlatList
                        data={categories}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ListEmptyComponent={<Text>There is no category</Text>}
                    />
                </View>
            </View>
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
});