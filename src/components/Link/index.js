import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { colors } from '../../constants/Colors';
import {fonts} from '../../utils';

const Link = (props) => {
  const {title, size, align, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    textAlign: align,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
  }),
});
