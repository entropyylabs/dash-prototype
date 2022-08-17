import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
const Banners = () => {
  const [showBanners, setShowBanners] = useState(false);
  const [banner, setBanner] = useState(1);
  const [hide, setHidder] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowBanners(true);
    }, 3000);
    setTimeout(() => {
      // setShowBanners(false);
      setBanner(2);
    }, 9000);
    setTimeout(() => {
      console.log("here");
      setHidder(true);
    }, 15000);
  }, []);

  if (showBanners)
    return (
      <View
        style={{
          position: "absolute",
          zIndex: 200,

          width: "100%",
        }}
      >
        {!hide && (
          <Image
            source={banner === 1 ? banner1 : banner2}
            style={{ top: 140, height: 52, width: 363, alignSelf: "center" }}
          />
        )}
      </View>
    );
  return <View></View>;
};

export default Banners;
