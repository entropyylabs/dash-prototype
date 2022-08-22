import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import Loader from "../Components/Loader";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Loader />;
  }

  return (
    <View style={Styles.page}>
      <Text
        style={{
          fontFamily: "DMSans_400Regular",
          fontSize: 64,
          color: "#FEE998",
        }}
      >
        Join the {"\n"}hunt
      </Text>
      <Text
        style={{ color: "#fff", fontFamily: "DMSans_400Regular", fontSize: 20 }}
      >
        Find NFTs along the way
      </Text>
      <View style={Styles.actionBox}>
        <Image
          style={Styles.gifHolder}
          source={require("../assets/gifs/join.gif")}
        />
        <TouchableOpacity
          title="Start Hunt in ARmode"
          onPress={() => navigation.navigate("Login")}
          style={Styles.huntButton}
        >
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  page: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    paddingTop: 50,
    paddingLeft: 40,
  },
  gifHolder: {
    height: 480,
    width: 270,
    borderRadius: 20,
    borderColor: "#FFF",
    borderWidth: 1,
  },
  actionBox: {
    marginTop: 20,
    alignItems: "center",
    paddingRight: 40,
  },
  huntButton: {
    height: 46,
    width: 46,
    backgroundColor: "#FEE998",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    marginTop: -23,
    borderColor: "#FCC15B",
    borderWidth: 3,
  },
});
