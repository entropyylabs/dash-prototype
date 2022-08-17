import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Celebration = () => {
  return (
    <View style={{ backgroundColor: "#000" }}>
      <Image
        style={{ width: "100%", height: "100%", top: -100 }}
        source={require("../assets/gifs/stars.gif")}
      />
      <Text
        style={{
          fontFamily: "DMSans_400Regular",
          color: "#FEE998",
          fontSize: 40,
          top: -650,
          alignSelf: "center",
        }}
      >
        Cheers,{"\n"}you own a NIKE{"\n"}NFT now
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  stars: {
    backgroundColor: "#000",
    position: "absolute",
    zIndex: 100,
  },
  //   mascot: {
  //     backgroundColor: "transparent",
  //     position: "absolute",
  //     zIndex: 0,
  //   },
});
export default Celebration;
