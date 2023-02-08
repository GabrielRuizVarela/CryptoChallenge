import CryptoList from './src/containers/CryptoList/CryptoList';
import theme from './src/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ThemeProvider} from 'styled-components';
const Stack = createNativeStackNavigator();

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={CryptoList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
