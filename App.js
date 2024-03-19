import {
	MD3LightTheme as DefaultTheme,
	PaperProvider,
} from "react-native-paper";

import LoginScreen from "./screens/LoginComponent";
import { View } from "react-native";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: "tomato",
		secondary: "yellow",
	},
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<View style={{ flex: 1 }}>
				<LoginScreen />
			</View>
		</PaperProvider>
	);
}
