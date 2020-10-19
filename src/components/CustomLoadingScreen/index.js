import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Fonts } from "../../assets";
const { width, height } = Dimensions.get("window");

const CustomloadingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Please Wait...</Text>
        <ActivityIndicator />
      </View>
    </View>
  );
};

export default CustomloadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "white",
    borderRadius: 50,
  },
  text: {
    fontFamily: Fonts.PoppinsLight,
  },
});
