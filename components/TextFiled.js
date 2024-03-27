// TextField.tsx
import React from "react";
import { View, TextInput, StyleSheet, TextInputProps } from "react-native";

const TextField = ({
    placeholder,
    value,
    onChangeText,
    multiline,
    keyboardType,
    maxRows,
    ...props
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    multiline && {
                        maxHeight: maxRows ? maxRows * 20 : undefined,
                    },
                ]}
                placeholder={placeholder}
                value={value ? value.toString() : ""}
                onChangeText={onChangeText}
                multiline={multiline}
                keyboardType={keyboardType}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        padding: 10,
    },
});

export default TextField;
