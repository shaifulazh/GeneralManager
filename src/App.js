// In App.js in a new project

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainDisplay from './MainDisplay';
import MarketScreen from './Screen/MarketScreen';
import OrderScreen from './Screen/OrderScreen';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ title: 'Kebun Hijau Enterprise - Vincente M.' }} >{props=><MainDisplay {...props} />}</Stack.Screen>
        <Stack.Screen name="Market" >{props=><MarketScreen {...props} />}</Stack.Screen>
        <Stack.Screen name="Order" >{props=><OrderScreen {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;