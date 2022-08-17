import react from "react";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
} from "react-native";

import WheelOfFortune from "react-native-wheel-of-fortune";

const participants = ["Yayyy", "Nah", "Try again", "Yayyy", "Nah", "Try again"];
class Spin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      started: false,
    };
    this.child = null;
  }

  buttonPress = () => {
    this.setState({
      started: true,
    });
    this.child._onPress();
  };

  render() {
    const wheelOptions = {
      rewards: participants,
      colors: [
        "#FEE998",
        "#DE8D8A",
        "#A5CDFD",
        "#FEE998",
        "#DE8D8A",
        "#A5CDFD",
      ],
      knobSize: 30,
      borderWidth: 5,
      borderColor: "#fff",
      innerRadius: 10,
      duration: 3000,
      backgroundColor: "transparent",
      textAngle: "horizontal",
      textColor: "#000",
      knobSource: require("./knob.png"),
      onRef: (ref) => (this.child = ref),
    };
    return (
      <View style={styles.container}>
        <WheelOfFortune
          options={wheelOptions}
          winner={0}
          getWinner={(value, index) => {
            this.setState({ winnerValue: value, winnerIndex: index });
          }}
        />
        {!this.state.started && (
          <View style={styles.startButtonView}>
            <TouchableOpacity
              onPress={() => this.buttonPress()}
              style={styles.startButton}
            >
              <Text style={styles.startButtonText}>Spin to win!</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.state.winnerIndex != null && (
          <View style={styles.winnerView}>
            {/* <Text style={styles.winnerText}>
              You win {participants[this.state.winnerIndex]}
            </Text> */}
            <TouchableOpacity
              onPress={() => {
                this.props.setModal(false);
                this.props.navigation.push("Mint");
              }}
              style={styles.tryAgainButton}
            >
              <Text style={styles.tryAgainText}>Yayy you win!</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}
export default Spin;

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -100,
  },
  startButtonView: {
    position: "absolute",
  },
  startButton: {
    backgroundColor: "rgba(0,0,0,.5)",
    marginTop: 50,
    padding: 5,
  },
  startButtonText: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "bold",
  },
  winnerView: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  tryAgainButton: {
    padding: 10,
  },
  winnerText: {
    fontSize: 30,
  },
  tryAgainButton: {
    padding: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  tryAgainText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
