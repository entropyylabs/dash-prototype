import { View, Text, Button, Image } from "react-native";
import React, { useEffect } from "react";

const Loader = () => {
  return (
    <View>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/splashScreen.png")}
      />
    </View>
  );
};

export default Loader;
