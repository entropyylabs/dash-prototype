import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import AddGif from "../AddGif";
import BottomDrawer from "react-native-bottom-drawer-view";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import marker from "../assets/images/marker.png";
import star from "../assets/images/star.png";
import Banners from "../Components/Banners";

import { BlurView } from "expo-blur";

import prompt1 from "../assets/images/prompt1.png";
import prompt2 from "../assets/images/prompt2.png";
import prompt3 from "../assets/images/prompt3.png";
import letsgo from "../assets/images/letsgo.png";

const ARmodeScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [showNFT, setShowNFT] = useState(false);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [mapScroll, setMapScroll] = useState(false);

  const [loaded, setLoaded] = useState(null);
  const [showBanners, setShowBanners] = useState(false);

  const prompts = [
    <Image source={prompt1} style={styles.prompt1} />,
    <Image source={prompt2} style={styles.prompt2} />,
    <Image source={prompt3} style={styles.prompt3} />,
    <Image source={letsgo} style={styles.letsgo} />,
  ];

  const [promptCount, setPromptCount] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setLoaded(true);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (loaded) {
    return (
      <View style={styles.container}>
        {promptCount < 4 ? (
          <BlurView intensity={20} style={styles.blur}>
            <TouchableWithoutFeedback
              onPress={() => setPromptCount(promptCount + 1)}
            >
              {prompts[promptCount]}
            </TouchableWithoutFeedback>
          </BlurView>
        ) : (
          <Banners />
        )}
        <Camera style={styles.camera} type={type}>
          <TouchableOpacity
            title="Start Hunt in ARmode"
            onPress={() => navigation.navigate("Home")}
            style={styles.huntButton}
          >
            <Ionicons name="exit-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={() => {
              setShowNFT(!showNFT);
            }}
          >
            <View style={styles.nftButton}>
              <Feather name="menu" size={24} color="white" />
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.gif}>{showNFT && <AddGif />}</View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowNFT(!showNFT);
              }}
            >
              <Text style={styles.text}>Show </Text>
            </TouchableOpacity>
          </View>
        </Camera>
        <BottomDrawer
          backgroundColor="rgba(255,255,255,0.0)"
          containerHeight={500}
          downDisplay={400}
          offset={0}
          startUp={false}
          panResponder={false}
          onExpanded={() => {
            setMapScroll(true);
          }}
          onCollapsed={() => {
            setMapScroll(false);
          }}
        >
          <View>
            <View style={styles.pull}>
              {!mapScroll ? (
                <Entypo name="chevron-up" size={24} color="white" />
              ) : (
                <Entypo name="chevron-down" size={24} color="white" />
              )}
            </View>
            <MapView
              style={{ height: 500, width: 400 }}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.022,
                longitudeDelta: 0.021,
              }}
              provider={PROVIDER_GOOGLE}
              customMapStyle={mapStyle}
              scrollEnabled={mapScroll}
            >
              <Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
                image={marker}
              />
              <Marker
                coordinate={{
                  latitude: latitude + 0.002,
                  longitude: longitude + 0.001,
                }}
                image={star}
              />
              <Marker
                coordinate={{
                  latitude: latitude + 0.004,
                  longitude: longitude + 0.002,
                }}
                image={star}
              />
              <Marker
                coordinate={{
                  latitude: latitude + 0.006,
                  longitude: longitude + 0.00006,
                }}
                image={star}
              />
              <Marker
                coordinate={{
                  latitude: latitude + 0.004,
                  longitude: longitude,
                }}
                image={star}
              />
              <Marker
                coordinate={{
                  latitude: latitude + 0.003,
                  longitude: longitude - 0.007,
                }}
                image={star}
              />
              <Marker
                coordinate={{
                  latitude: latitude + 0.006,
                  longitude: longitude - 0.009,
                }}
                image={star}
              />
              <MapView.Circle
                key={(latitude + 0.004 + longitude).toString()}
                center={{
                  latitude: latitude + 0.004,
                  longitude: longitude,
                }}
                radius={300}
                strokeWidth={1}
                strokeColor={"#EE7D79"}
                fillColor={"rgba(239,139,144,0.5)"}
              />
              <MapView.Circle
                key={(latitude + 0.003 + longitude + 0.007).toString()}
                center={{
                  latitude: latitude + 0.003,
                  longitude: longitude - 0.007,
                }}
                radius={250}
                strokeWidth={1}
                strokeColor={"#EE7D79"}
                fillColor={"rgba(239,139,144,0.5)"}
              />
              <MapView.Circle
                key={(latitude + 0.006 + longitude - 0.009).toString()}
                center={{
                  latitude: latitude + 0.006,
                  longitude: longitude - 0.009,
                }}
                radius={400}
                strokeWidth={1}
                strokeColor={"#EE7D79"}
                fillColor={"rgba(239,139,144,0.5)"}
              />
              <MapView.Circle
                key={(latitude - 0.006 + longitude - 0.007).toString()}
                center={{
                  latitude: latitude - 0.006,
                  longitude: longitude - 0.007,
                }}
                radius={400}
                strokeWidth={1}
                strokeColor={"#EE7D79"}
                fillColor={"rgba(239,139,144,0.5)"}
              />
            </MapView>
          </View>
        </BottomDrawer>
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: "#fff",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/gifs/loader.gif")}
        style={{ top: -50, height: 500, width: 200 }}
      />
      <Image
        source={require("../assets/images/loading.png")}
        style={{ top: -160 }}
      />
    </View>
  );
};

export default ARmodeScreen;

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
  huntButton: {
    height: 46,
    width: 46,
    backgroundColor: "#FEE998",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    borderColor: "#FCC15B",
    borderWidth: 3,
    marginTop: 54,
    marginLeft: 32,
  },
  pull: {
    height: 30,
    backgroundColor: "#000",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  blur: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 100,
  },
  prompt1: {
    alignSelf: "center",
    top: 400,
  },
  prompt2: {
    alignSelf: "center",
    top: 400,
  },
  prompt3: {
    alignSelf: "center",
    top: 550,
  },
  letsgo: { alignSelf: "center", top: 200 },
  nftButton: {
    position: "absolute",
    height: 46,
    width: 46,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    right: 12,
  },
});

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#523735",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#c9b2a6",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#dcd2be",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ae9e90",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#93817c",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#a5b076",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#447530",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f1e6",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#fdfcf8",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#f8c967",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#e9bc62",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#e98d58",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#db8555",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#806b63",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8f7d77",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ebe3cd",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#dfd2ae",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#b9d3c2",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#92998d",
      },
    ],
  },
];
