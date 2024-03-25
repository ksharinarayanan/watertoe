import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import ContinueWithGoogleButton from "../components/ContinueWithGoogleButton";
import StandardText from "../components/StandardText";
import { Snackbar } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = () => {
    const [snackbarVisible, setSnackbarVisible] = useState(true);

    return (
        <View style={styles.container}>
            <StandardText style={styles.loginText}>Login</StandardText>
            <Image
                style={styles.watermanImage}
                source={require("../assets/waterman.png")}
            />
            <LinearGradient
                colors={[
                    "rgba(119, 192, 241, 0.45)",
                    "rgba(28, 163, 236, 0.45)",
                    "rgba(0, 0, 0, 0.45)",
                ]}
                style={styles.contentContainer}
            >
                <ContinueWithGoogleButton
                    onPress={() => setSnackbarVisible((s) => !s)}
                />
                <View style={styles.textContainer}>
                    <StandardText>Don't have an account?</StandardText>
                    <StandardText style={{ marginLeft: 50 }}>
                        Signup
                    </StandardText>
                </View>
            </LinearGradient>
            <Snackbar
                visible={snackbarVisible}
                style={{ backgroundColor: "green" }}
                onDismiss={() => {
                    setSnackbarVisible(false);
                }}
                action={{
                    label: "Dismiss",
                }}
            >
                Login successful
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 40,
        height: "40%",
        borderRadius: 20,
    },
    loginText: {
        marginRight: "auto",
        paddingLeft: 40,
        fontSize: 30,
        fontWeight: "bold",
        paddingBottom: "5%",
    },
    watermanImage: {
        position: "absolute",
        top: "18%",
        right: "7%",
    },
    textContainer: {
        marginTop: 20,
        flexDirection: "row",
    },
});

export default LoginScreen;
