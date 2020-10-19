import { StyleSheet } from "react-native";
import { Fonts } from "./../../assets";
import { Toast } from "native-base";
import { showMessage, hideMessage } from "react-native-flash-message";

// "Data saved successfully!"
// "Please complete the fill!"
// "Warning!"
const CustomToast = (params) => {
  const { type, text, buttonText, duration, position } = params;
  switch (type.toUpperCase()) {
    case "SUCCESS":
      return showMessage({
        message: text,
        // description: "My message description",
        titleStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
        type: "success",
        // backgroundColor: "#22bb33", // background color
        color: "#606060", // text color
        icon: "success",
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    case "FAILED":
      return showMessage({
        message: text,
        // description: "My message description",
        titleStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
        type: "danger",
        // backgroundColor: "#bb2124", // background color
        color: "#606060", // text color
        icon: "danger",
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    case "WARNING":
      return showMessage({
        message: text,
        // description: "My message description",
        titleStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
        type: "warning",
        backgroundColor: "#f0ad4e", // background color
        color: "#22bb33", // text color
        icon: "warning",
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    case "INFO":
      return showMessage({
        message: text,
        // description: "My message description",
        titleStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
        type: "info",
        // backgroundColor: "#f0ad4e", // background color
        color: "#22bb33", // text color
        icon: "warning",
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    case "DANGER-NB":
      return Toast.show({
        text: text,
        type: "danger",
        buttonText: buttonText || "Okay",
        // duration: duration || 3000,
        position: position || "top",
        style: { backgroundColor: "#bb2124" },
        buttonStyle: { backgroundColor: "white" },
        buttonTextStyle: {
          fontFamily: Fonts.PoppinsSemiBold,
          color: "#bb2124",
        },
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    case "SUCCESS-NB":
      return Toast.show({
        text: text,
        type: "success",
        buttonText: buttonText || "Okay",
        // duration: duration ? duration : 3000,
        position: position ? position : "top",
        style: { backgroundColor: "#22bb33" },
        buttonStyle: { backgroundColor: "white" },
        buttonTextStyle: {
          fontFamily: Fonts.PoppinsSemiBold,
          color: "#22bb33",
        },
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    case "WARNING-NB":
      return Toast.show({
        text: text,
        buttonText: buttonText || "Okay",
        duration: duration || 3000,
        position: position || "top",
        style: { backgroundColor: "#f0ad4e" },
        buttonStyle: { backgroundColor: "white" },
        buttonTextStyle: {
          fontFamily: Fonts.PoppinsSemiBold,
          color: "#f0ad4e",
        },
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;

    default:
      return Toast.show({
        text: text,
        buttonText: buttonText || "Okay",
        duration: duration || 3000,
        position: position || "top",
        style: { backgroundColor: "#bb2124" },
        buttonStyle: { backgroundColor: "white" },
        buttonTextStyle: {
          fontFamily: Fonts.PoppinsSemiBold,
          color: "#bb2124",
        },
        textStyle: { fontFamily: Fonts.PoppinsSemiBold, color: "white" },
      });
      break;
  }
};

export default CustomToast;
