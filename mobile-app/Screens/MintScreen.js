import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import Celebration from "../Components/Celebration";

const MintScreen = ({ navigation }) => {
  const [showBanners, setShowBanners] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowBanners(!showBanners);
    }, 3000);
  }, []);

  if (showBanners) return <Celebration />;
  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        backgroundColor: "#000",
      }}
    >
      <ImageBackground
        source={require("../assets/gifs/background.gif")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
        <Image
          source={require("../assets/gifs/shoes.gif")}
          style={{ top: -10 }}
        />

        <View style={Styles.card}>
          <View style={Styles.topRow}>
            <Image source={require("../assets/images/nike.png")} />
            <Text
              style={{
                marginLeft: 10,
                color: "#fff",
                fontFamily: "DMSans_400Regular",
                fontSize: 16,
              }}
            >
              Nike
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "DMSans_700Bold",
              fontSize: 32,
              color: "#fff",
              paddingTop: 15,
              paddingBottom: 20,
            }}
          >
            Nike RKTNFT #1
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontFamily: "DMSans_400Regular",
            }}
          >
            Utility
          </Text>
          <Text
            style={{
              fontFamily: "DMSans_700Bold",
              fontSize: 36,
              color: "#fff",
            }}
          >
            Nike Air Jordans worth
            <Text style={{ color: "#F8D25A" }}>$200</Text>
          </Text>
          <Text
            style={{
              fontFamily: "DMSans_700Bold",
              fontSize: 16,
              color: "#A3052E",
              paddingTop: 20,
            }}
          >
            Expires : 18th August
          </Text>
        </View>

        <TouchableOpacity
          style={Styles.button}
          onPress={() => navigation.navigate("Transferring")}
        >
          <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 24 }}>
            Mint
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const Styles = StyleSheet.create({
  card: {
    width: 353,
    height: 337,
    backgroundColor: "rgba(165, 205, 253, 0.85)",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "rgba(26, 100, 188, 1)",
    alignSelf: "center",
    top: -60,
    padding: 15,
    paddingLeft: 30,
  },
  button: {
    width: 353,
    height: 67,
    backgroundColor: "#A5CDFD",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "rgba(26, 100, 188, 1)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: -30,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default MintScreen;
