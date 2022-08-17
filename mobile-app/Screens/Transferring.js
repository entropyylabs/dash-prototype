import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

const Transferring = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../assets/gifs/transfer1.gif")}
          style={{ width: 250, height: 240, top: 60 }}
        />
        <Image
          source={require("../assets/gifs/transfer2.gif")}
          style={{ width: 64, height: 480, top: -40 }}
        />
      </View>

      <Text
        style={{
          color: "#fff",
          fontFamily: "DMSans_400Regular",
          fontSize: 24,
          alignSelf: "center",
          top: -150,
        }}
      >
        Transferring into your wallet
      </Text>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("MyNFTs")}
      >
        <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 24 }}>
          Go to my NFTs
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  button: {
    width: 353,
    height: 67,
    backgroundColor: "#FEE998",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#EBA370",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: -30,
  },
});

export default Transferring;
