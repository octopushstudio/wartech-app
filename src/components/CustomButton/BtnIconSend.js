import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconSendActive, IconSendDisable} from '../../assets';
import { colors } from '../../constants/Colors';

const BtnIconSend = props => {
  const {disable, onPress} = props;
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDisable />
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(disable)}>
      <IconSendActive />
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 10,
    paddingLeft: 10,
  }),
});
