import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import ARmodeScreen from "./Screens/ARmodeScreen";
import MintScreen from "./Screens/MintScreen";
import MyNFTs from "./Screens/MyNFTs";
import NFTscreen from "./Screens/NFTscreen";
import SplashScreen from "./Screens/SplashScreen";
import HomeScreen from "./Screens/HomeScreen";
import Spin from "./Screens/Spin";
import SpinTheWheel from "./Screens/SpinTheWheel";
import Transferring from "./Screens/Transferring";
import Utilise from "./Screens/Utilise";
import Login from "./Screens/Login";

import "./ignoreWarning";
const Stack = createNativeStackNavigator();
console.disableYellowBox = true;

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mint"
          component={MintScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="NFTscreen" component={NFTscreen} />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyNFTs"
          component={MyNFTs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Spin" component={Spin} />
        <Stack.Screen
          name="SpinTheWheel"
          component={SpinTheWheel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transferring"
          component={Transferring}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ArMode"
          component={ARmodeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Utilise"
          component={Utilise}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  gif: {
    margin: 1,
  },
});
