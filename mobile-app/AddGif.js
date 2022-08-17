import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  Image,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import Spin from "./Screens/Spin";
import { Entypo } from "@expo/vector-icons";

const AddGifImage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Modal isVisible={isModalVisible} backdropOpacity={1}>
          <View style={{ flex: 1, paddingTop: 40 }}>
            <TouchableOpacity title="back" onPress={toggleModal}>
              <Entypo name="chevron-left" size={24} color="white" />
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                fontSize: 40,
                paddingTop: 40,
                fontFamily: "DMSans_400Regular",
                paddingBottom: 0,
                marginBottom: 0,
              }}
            >
              Your luck decides what you win today
            </Text>
            <Spin navigation={navigation} />
          </View>
        </Modal>
        <Pressable
          //   onPress={() => setModalVisible(true)}
          onPress={() => navigation.navigate("SpinTheWheel")}
        >
          <Image
            style={{ width: "100%", height: "80%", marginTop: 50 }}
            source={require("./shoes.gif")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 25,
    marginTop: 150,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default AddGifImage;
