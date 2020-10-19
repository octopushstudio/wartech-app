import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors } from '../../constants/Colors';
import {fonts} from '../../utils';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const CustomButton = props => {
  const {type, title, onPress, icon, disable} = props;
  if (type === 'btn-icon-send') {
    return (
      <BtnIconSend icon={icon} onPress={onPress} disable={disable} />
    );
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.primary
        : colors.button.secondary.text,
  }),
  disableBg:{
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background
  },
  disableText:{
    fontSize: 18,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.button.disable.text
  }
});
