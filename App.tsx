import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import EditProductScreen from './src/screens/EditProductScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import NewProductScreen from './src/screens/NewProductScreen';
import { StackScreens } from './src/helpers/types';
import { setI18nConfig } from './src/helpers/translation/translationConfig';
import { ProductContextProvider } from './src/contexts/ProductContext';



export default function App() {
  setI18nConfig();
  return (
    <ProductContextProvider>
      <MainNavigator />
    </ProductContextProvider>
  );



}

export const MainNavigator = () => {
  const Stack = createNativeStackNavigator<StackScreens>();
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductListScreen" component={ProductListScreen} />
        <Stack.Screen name="NewProductScreen" component={NewProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProductScreen" component={EditProductScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
