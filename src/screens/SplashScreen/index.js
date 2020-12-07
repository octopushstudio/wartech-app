import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Fonts, BrandLogo } from "../../assets";
import { colors } from "../../constants/Colors";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.addListener("focus", async () => {
      setTimeout(() => {
        navigation.replace('MainAuthScreen');
      }, 3000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={BrandLogo}
        style={{
          width: 227,
          height: 57,
        }}
      />
      <ActivityIndicator size={32} color={colors.white} style={{ marginTop: 20 }} />
      <Text style={styles.version}>V.1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -30,
    backgroundColor: colors.primary,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  version: {
    position: "absolute",
    bottom: 40,
    fontFamily: "Nunito-Black",
    fontSize: 14,
    color: colors.text.primary,
  },
});

export default SplashScreen;
