import CryptoList from './src/containers/CryptoList/CryptoList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

const App = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={CryptoList}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default App;
