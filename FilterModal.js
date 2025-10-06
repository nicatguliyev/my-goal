import React from "react";
import { Text, View, Modal, StyleSheet, Button, Pressable } from 'react-native';
import { useState, useEffect, useCallback } from "react";
import { Provider as PaperProvider, Checkbox} from "react-native-paper";


const FilterModal = ({ setModalVisible }) => {

    const [categoryData, setCategoryData] = useState(
        [
            {
                id: 1, label: "Work", selected: false
            },
            {
                id: 2, label: "Study", selected: false
            },
            {
                id: 3, label: "Aquarium", selected: false
            },
            {
                id: 4, label: "Gym", selected: false
            },
            {
                id: 5, label: "Movie", selected: false
            },
        ]
    );

    const handleApply = () => {
        console.log(categoryData);
    }

    const toggleSelected = useCallback((id) => {
        setCategoryData(prev =>
            prev.map(item =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    }, []);

    return (
        <View style={styles.modalView}>
            <View style={styles.categoriesView}>
                {categoryData.map((item) => (
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Checkbox key={item.id} status={item.selected ? 'checked' : 'unchecked'} onPress={() => { toggleSelected(item.id) }} />
                        <Text style={styles.labelText}>{item.label}</Text>
                    </View>
                ))}
                <View style={styles.seperatorView} />
                <View style={styles.buttonsView}>
                    <Pressable style={({ pressed }) => [styles.applyButton, pressed && styles.applybuttonPressed]} onPress={handleApply}>
                        <Text style = {{color: "white", fontWeight: "bold"}}>Apply</Text>
                    </Pressable>

                    <Pressable style={({ pressed }) => [styles.closeBtn, pressed && styles.closeBtnPressed]} onPress={() => { setModalVisible(false) }}>
                        <Text style = {{color: "white", fontWeight: "bold"}}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default FilterModal;

const styles = StyleSheet.create({

    modalView: {
        width: "100%",
        height: "100%",
        backgroundColor: "#adadad36",
        justifyContent: "center",
        alignItems: "center"
    },
    categoriesView: {
        width: "80%",
        marginHorizontal: 36,
        padding: 12,
        backgroundColor: "lightgrey",
        flexDirection: "row",
        flexWrap: "wrap",
        columnGap: 20,
        rowGap: 20,
        borderRadius: 20,
    },

    labelText: {
        fontSize: 20,
        // color: "white"
    },
    seperatorView: {
        width: "100%",
        backgroundColor: "grey",
        height: 1
    },
    buttonsView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    applyButton: {
        backgroundColor: "green",
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10
    },
    closeBtn: {
        backgroundColor: "red",
        paddingHorizontal: 30,
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
    }

});

