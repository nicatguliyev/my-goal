import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";




const CustomButton = (props) => {

    const styles = StyleSheet.create({
        btn: {
            backgroundColor: props.backgroundColor,
            paddingHorizontal: 40,
            paddingVertical: 15,
            borderRadius: props.borderRadius,
            alignItems: "center"
        },
        btnPressed: {
            backgroundColor: props.backgroundColor,
            opacity: 0.6,
            borderRadius: props.borderRadius
        },
        btnText: {
            color: props.textColor,
            fontWeight: props.fontWeight
        }
    });

    return (
        <Pressable style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}>
            <Text style={styles.btnText}>{props.title}</Text>
        </Pressable>
    );
}



export default CustomButton;


