/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import type { PropsWithChildren } from "react";
import {
	FlatList,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	View,
	useColorScheme,
} from "react-native";

import CryptoList from "./src/containers/CryptoList";

const Stack = createNativeStackNavigator();

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
	title: string;
}>;

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === "dark";

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="List" component={CryptoList} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
