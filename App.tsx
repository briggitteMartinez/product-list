import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EditProductScreen from './src/screens/EditProductScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import NewProductScreen from './src/screens/NewProductScreen';
import { StackScreens } from './src/helpers/types';
import { setI18nConfig } from './src/helpers/translation/translationConfig';

export default function App() {
  const Stack = createNativeStackNavigator<StackScreens>();
  setI18nConfig();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="NewProductScreen" component={NewProductScreen} />
        <Stack.Screen name="EditProductScreen" component={EditProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
