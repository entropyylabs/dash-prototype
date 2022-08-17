import { View, Text, Button, Image } from "react-native";
import React, { useEffect } from "react";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);
  }, []);
  return (
    <View>
      <Image
        style={{
          width: 250,
          height: 250,
          position: "absolute",
          top: 220,
          left: 70,
          zIndex: 100,
        }}
        source={require("../assets/gifs/mascot.gif")}
      />
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/splashScreen.png")}
      />
    </View>
  );
};

export default SplashScreen;
