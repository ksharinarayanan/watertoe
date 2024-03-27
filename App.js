import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from "react-native-paper";
import LoginScreen from "./screens/LoginComponent";
import SignupComponent from "./screens/SignupComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createStackNavigator();
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
            <NavigationContainer>
                <SafeAreaView style={{ flex: 1 }}>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen
                            name="Signup"
                            component={SignupComponent}
                        />
                    </Stack.Navigator>
                </SafeAreaView>
            </NavigationContainer>
        </PaperProvider>
    );
}
