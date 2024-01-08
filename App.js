import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/home';
import { EasyLevel } from './src/pages/easyLevel';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />   
      <Stack.Screen name="EasyLevel" component={EasyLevel} />   
      {/* Adicione outras telas conforme necessário */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}


