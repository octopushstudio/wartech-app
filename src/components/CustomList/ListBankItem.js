import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Fonts } from "../../assets";

export default ({ colorBack }) => {
  const styles = StyleSheet.create({
    listBankItem: {
      paddingHorizontal: 5,
      backgroundColor: colorBack || "#4e89d3",
      borderRadius: 7,
      height: 60,
      width: 130,
      marginRight: 10,
    },
    // Fonts :
    poppins_sembold_18: {
      fontFamily: Fonts.PoppinsSemiBold,
      fontSize: 18,
      color: "#fff",
    },
    poppins_reg_14: {
      fontFamily: Fonts.PoppinsSemiBold,
      fontSize: 14,
      color: "#fff",
    },
    poppins_lgt_12: {
      fontFamily: Fonts.PoppinsLight,
      fontSize: 12,
      color: "#fff",
    },
  });

  return (
    <View style={styles.listBankItem}>
      <Text style={styles.poppins_sembold_18}>IDR 192,22 k</Text>
      <Text style={[styles.poppins_lgt_12, { textAlign: "left" }]}>4 akun</Text>
    </View>
  );
};
