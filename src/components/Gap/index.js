import React from "react";
import { View } from "react-native";

const Gap = (props) => {
  const { height, width } = props;
  return <View style={{ height: height, width: width }} />;
};

export default Gap;
