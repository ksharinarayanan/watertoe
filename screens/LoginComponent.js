import React from "react";
import { View, StyleSheet } from "react-native";
import ContinueWithGoogleButton from "../components/ContinueWithGoogleButton";
import StandardText from "../components/StandardText";

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<ContinueWithGoogleButton />
				<View style={styles.textContainer}>
					<StandardText>Don't have an account?</StandardText>
					<StandardText style={{ marginLeft: 50 }}>
						Signup
					</StandardText>
				</View>
			</View>
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
