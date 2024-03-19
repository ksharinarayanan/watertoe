import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function StandardText({ style, children }) {
	return (
		<Text style={{ color: "white", fontSize: 16, ...style }}>
			{children}
		</Text>
	);
}

const styles = StyleSheet.create({});
