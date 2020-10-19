import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome5";

import { colors } from "../../constants/Colors";

const CustomCircleButton = ({ btnColor, btnIcon, onPress, bottom, right }) => {
  const styles = StyleSheet.create({
    btnContainer: {
      borderRadius: 50,
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: btnColor || colors.brandColor,
      position: "absolute",
      bottom: bottom || 20,
      right: right || 20,
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.btnContainer]}
    >
      <FontAwesome name={btnIcon} color="white" size={18} />
    </TouchableOpacity>
  );
};

export default CustomCircleButton;
