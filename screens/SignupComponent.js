// NewComponent.js

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextField from "../components/TextFiled";
import { SafeAreaView } from "react-native-safe-area-context";

const SignupComponent = () => {
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    const handleTextChange = (newText) => {
        setText(newText);
    };
    const handleAddressChange = (newText) => {
        setAddress(newText);
    };
    const handleNumberChange = (newNumber) => {
        setNumber(newNumber);
    };
    return (
        <View>
            <Text>Example Screen</Text>
            <TextField
                placeholder="Enter text..."
                value={text}
                onChangeText={handleTextChange}
                multiline
                maxRows={5} // Limit to 5 rows
            />
            <TextField
                placeholder="Enter number..."
                value={number ? number.toString() : ""}
                onChangeText={handleNumberChange}
                keyboardType="numeric"
            />
            <TextField
                placeholder="Enter text..."
                value={text}
                onChangeText={handleAddressChange}
                multiline={true} // Set multiline to true for textarea
                numberOfLines={4} // Optional: Set the number of visible lines
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default SignupComponent;
