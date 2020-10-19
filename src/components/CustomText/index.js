import React from "react";
import { StyleSheet, Text } from "react-native";
import { Fonts } from "../../assets";

const CustomText = (props) => {
  const { children, size, color, weight, stylesProps } = props;

  const getWeight = (params) => {
    switch (params ? params.toLowerCase() : "") {
      case "light":
        return Fonts.PoppinsLight;
        break;
      case "regular":
        return Fonts.PoppinsRegular;
        break;
      case "medium":
        return Fonts.PoppinsMedium;
        break;
      case "semibold":
        return Fonts.PoppinsSemiBold;
        break;
      case "bold":
        return Fonts.PoppinsBold;
        break;
      case "black":
        return Fonts.PoppinsBlack;
        break;

      default:
        return Fonts.PoppinsRegular;
        break;
    }
  };

  const getColor = (params) => {
    switch (params ? params.toLowerCase() : "") {
      case "maincolor":
        return "#000";
        break;
      case "secondcolor":
        return "#A9A9A9";
        break;
      case "thirdcolor":
        return "#ccc";
        break;

      default:
        return "#000";
        break;
    }
  };

  switch (size ? size.toLowerCase() : "regular") {
    case "xtrasmall":
      return (
        <Text
          style={[
            styles.text(8, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "small":
      return (
        <Text
          style={[
            styles.text(10, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "regular":
      return (
        <Text
          style={[
            styles.text(12, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "medium":
      return (
        <Text
          style={[
            styles.text(14, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "large":
      return (
        <Text
          style={[
            styles.text(16, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "xtralarge":
      return (
        <Text
          style={[
            styles.text(18, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "verylarge":
      return (
        <Text
          style={[
            styles.text(23, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
    case "jumbo":
      return (
        <Text
          style={[
            styles.text(32, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;

    default:
      return (
        <Text
          style={[
            styles.text(12, getWeight(weight), getColor(color)),
            stylesProps,
          ]}
        >
          {children}
        </Text>
      );
      break;
  }
};

export default CustomText;

const styles = StyleSheet.create({
  text: (size, weight, color) => ({
    fontSize: size,
    fontFamily: weight,
    color: color,
  }),
});
