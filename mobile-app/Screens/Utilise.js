import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
const { width, height } = Dimensions.get("window");

const Utilise = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [showBanners, setShowBanners] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowBanners(!showBanners);
    }, 6000);
  }, []);

  if (showBanners)
    return (
      <View style={{ backgroundColor: "#000" }}>
        <Image
          style={{ height: "100%", width: "100%", top: 20 }}
          source={require("../assets/images/education.png")}
        />
      </View>
    );
  return (
    <View style={styles.page}>
      <ImageBackground
        source={require("../assets/gifs/background.gif")}
        resizeMode="cover"
        style={{ height: "100%" }}
      >
        <Modal isVisible={isModalVisible} backdropOpacity={0.7}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              style={{ width: 353, height: 213, marginTop: 50 }}
              source={require("../assets/images/otp.png")}
            />
          </TouchableOpacity>
        </Modal>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/gifs/shoes.gif")}
            style={{ top: 80 }}
          />

          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 24 }}>
              Generate OTP
            </Text>
          </TouchableOpacity>

          <View style={styles.card}>
            <View style={styles.topRow}>
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
              <Text
                style={{
                  fontFamily: "DMSans_700Bold",
                  fontSize: 13,
                  color: "#A3052E",
                  marginLeft: 100,
                }}
              >
                Expires : 18th August
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "DMSans_700Bold",
                fontSize: 20,
                color: "#fff",
                paddingTop: 15,
                paddingBottom: 20,
              }}
            >
              Nike RKTNFT #1
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontFamily: "DMSans_400Regular",
              }}
            >
              Utility :
              <Text
                style={{
                  fontFamily: "DMSans_700Bold",
                  fontSize: 16,
                  color: "#fff",
                }}
              >
                {" "}
                Nike Air Jordans worth
                <Text style={{ color: "#F8D25A" }}> $200</Text>
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  page_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width,
    height,
  },
  page: { height, backgroundColor: "#000" },
  card: {
    width: 353,
    height: 151,
    backgroundColor: "rgba(165, 205, 253, 0.85)",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "rgba(26, 100, 188, 1)",
    alignSelf: "center",
    top: 100,
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
    top: 90,
  },
  card2: {
    width: 353,
    height: 151,
    backgroundColor: "background: rgba(254, 233, 152, 0.85)",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "rgba(252, 193, 91, 1)",
    alignSelf: "center",
    top: 100,
    padding: 15,
    paddingLeft: 30,
  },
  button2: {
    width: 353,
    height: 67,
    backgroundColor: "rgba(254, 233, 152, 1)",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "rgba(252, 193, 91, 1)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 90,
  },
  button3: {
    width: 353,
    height: 67,
    backgroundColor: "#F4B5B4",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "rgba(252, 193, 91, 1)",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    top: 90,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  blur: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Utilise;
