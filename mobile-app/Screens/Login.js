import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";
import { sequence } from "0xsequence";

export default function Login() {
  const [wallet, setWallet] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://sequence.app/auth");
    setWallet(result);
  };
  return (
    <View style={styles.container}>
      <Button title="Open WebBrowser" onPress={_handlePressButtonAsync} />
      <Text>WALLET ADDRESS - {result && JSON.stringify(result)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});
