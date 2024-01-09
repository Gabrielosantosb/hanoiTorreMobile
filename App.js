import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/pages/home";
import { Game } from "./src/pages/game";
import { EasyLevel } from "./src/pages/level/EasyLevel";
import { MediumLevel } from "./src/pages/level/MediumLevel";
import { HardLevel } from "./src/pages/level/HardLevel";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "", headerTransparent: true, headerShown: false }}
        />
        <Stack.Screen
          name="EasyLevel"
          component={EasyLevel}
          options={{ title: "", headerTransparent: true, headerShown: false }}
        />
        <Stack.Screen
          name="MediumLevel"
          component={MediumLevel}
          options={{ title: "", headerTransparent: true, headerShown: false }}
        />
        <Stack.Screen
          name="HardLevel"
          component={HardLevel}
          options={{ title: "", headerTransparent: true, headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
