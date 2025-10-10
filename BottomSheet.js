import React, { useState } from "react";
import { Modal, View, Text, Pressable, StyleSheet, FlatList} from 'react-native';
import { Ionicons } from "@expo/vector-icons";


const BottomSheet = ({ modalVisible, setModalVisible }) => {

    const [categories, setCategories] = useState(
        [
            {
                id: 1,
                icon: "work",
                name: "Work",
                selected: false
            },
            {
                id: 2,
                icon: "study",
                name: "Study",
                selected: false
            },
            {
                id: 3,
                icon: "gym",
                name: "Gym",
                selected: false
            }
        ]
    );

    const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    )

    return (
        <View>
            <Modal transparent visible={modalVisible} animationType="slide" statusBarTranslucent>
                <View style={styles.container}>
                    <View style={styles.categoryContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>CATEGORIES</Text>
                            <Pressable style={({ pressed }) => pressed ? [styles.closeBtn, styles.closeBtnPressed] : styles.closeBtn} onPress={() => setModalVisible(false)}>
                                <Ionicons name="close" size={26} color="white" />
                            </Pressable>
                        </View>
                        <View style = {{backgroundColor: "red", flex: 1}}>
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
        backgroundColor: "white"
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
        backgroundColor: "#527187",
        padding: 10,
        borderRadius: 24,
        position: 'absolute',
        right: 16
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