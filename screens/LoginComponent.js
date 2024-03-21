import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ContinueWithGoogleButton from "../components/ContinueWithGoogleButton";
import StandardText from "../components/StandardText";
import { Snackbar } from "react-native-paper";

const LoginScreen = () => {
	const [snackbarVisible, setSnackbarVisible] = useState(true);

	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<ContinueWithGoogleButton
					onPress={() => setSnackbarVisible((s) => !s)}
				/>
				<View style={styles.textContainer}>
					<StandardText>Don't have an account?</StandardText>
					<StandardText style={{ marginLeft: 50 }}>
						Signup
					</StandardText>
				</View>
			</View>
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
	},
	textContainer: {
		marginTop: 20,
		flexDirection: "row",
	},
});

export default LoginScreen;
