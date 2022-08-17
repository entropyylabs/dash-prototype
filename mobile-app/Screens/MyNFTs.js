import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import VerticalViewPager from "react-native-vertical-view-pager";
import { BlurView } from "expo-blur";
const { width, height } = Dimensions.get("window");

const MyNFTs = ({ navigation }) => {
  return (
    <VerticalViewPager showsVerticalScrollIndicator={false}>
      <View style={{ height, backgroundColor: "#000" }}>
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
          >
            <Image
              source={require("../assets/gifs/shoes.gif")}
              style={{ top: 80 }}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Utilise")}
            >
              <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 24 }}>
                Let’s utilise
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
      <View style={styles.page}>
        <View style={{ height: "100%", backgroundColor: "#000" }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/gifs/zara.gif")}
              style={{ top: 80 }}
            />

            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigation.navigate("Transferring")}
            >
              <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 24 }}>
                Let’s utilise
              </Text>
            </TouchableOpacity>

            <View style={styles.card2}>
              <View style={styles.topRow}>
                <Image source={require("../assets/images/zara.png")} />
                <Text
                  style={{
                    marginLeft: 10,
                    color: "#000",
                    fontFamily: "DMSans_400Regular",
                    fontSize: 16,
                  }}
                >
                  Zara
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
                  color: "#000",
                  paddingTop: 15,
                  paddingBottom: 20,
                }}
              >
                Zara Spring Collection
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#000",
                  fontFamily: "DMSans_400Regular",
                }}
              >
                Utility :
                <Text
                  style={{
                    fontFamily: "DMSans_700Bold",
                    fontSize: 16,
                    color: "#000",
                  }}
                >
                  {" "}
                  Tickets to Zara Fashion Show
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.page}>
        <BlurView intensity={5} style={styles.blur}>
          <Image
            source={require("../assets/images/expired.png")}
            style={{ alignSelf: "center" }}
          />
        </BlurView>
        <View style={{ height: "100%", backgroundColor: "#F4B5B4" }}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/gifs/miniso.gif")}
              style={{ top: 80 }}
            />

            <TouchableOpacity
              style={styles.button3}
              onPress={() => navigation.navigate("Utilise")}
            >
              <Text style={{ fontFamily: "DMSans_400Regular", fontSize: 24 }}>
                Expired
              </Text>
            </TouchableOpacity>

            <View style={styles.card2}>
              <View style={styles.topRow}>
                <Image source={require("../assets/images/miniso.png")} />
                <Text
                  style={{
                    marginLeft: 10,
                    color: "#000",
                    fontFamily: "DMSans_400Regular",
                    fontSize: 16,
                  }}
                >
                  MINISO
                </Text>
                <Text
                  style={{
                    fontFamily: "DMSans_700Bold",
                    fontSize: 13,
                    color: "#A3052E",
                    marginLeft: 80,
                  }}
                >
                  Expires : 18th August
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "DMSans_700Bold",
                  fontSize: 20,
                  color: "#000",
                  paddingTop: 15,
                  paddingBottom: 20,
                }}
              >
                MINISO Pixies Collection
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "#000",
                  fontFamily: "DMSans_400Regular",
                }}
              >
                Utility :
                <Text
                  style={{
                    fontFamily: "DMSans_700Bold",
                    fontSize: 16,
                    color: "#000",
                  }}
                >
                  {" "}
                  Discount Coupon
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </VerticalViewPager>
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
  page: { height },
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

export default MyNFTs;
