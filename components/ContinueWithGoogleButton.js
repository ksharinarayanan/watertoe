import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import StandardText from "./StandardText";

export default function ContinueWithGoogleButton({ onPress }) {
	return (
		<View style={styles.container}>
			<Button
				style={styles.button}
				mode="contained-tonal"
				onPress={onPress}
			>
				<View style={styles.buttonContent}>
					<Image
						source={require("../assets/google-logo.png")}
						style={styles.image}
					/>
					<StandardText style={styles.buttonText}>
						Continue with Google
					</StandardText>
				</View>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignContent: "center",
		justifyContent: "center",
	},
	button: {
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "#D9D9D9",
		borderRadius: 5,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContent: {
		flexDirection: "row",
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 8,
	},
	buttonText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
		marginHorizontal: 10,
	},
});
