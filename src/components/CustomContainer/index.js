import React from "react";
import { StyleSheet, View } from "react-native";
import CustomloadingScreen from "../CustomLoadingScreen";
import { colors } from "../../constants/Colors";

const CustomContainer = (props) => {
  const { children, loading } = props;
  return (
    <View style={styles.container}>
      {children}
      {loading && <CustomloadingScreen />}
    </View>
  );
};

export default CustomContainer;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.white },
});
