import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Gap from '../Gap';
import CustomButton from '../CustomButton';
import {colors} from '../../constants/Colors';
import {Fonts} from '../../assets';

const CustomHeader = (props) => {
  const {onPress, title, type} = props;
  return (
    <View style={styles.container(type)}>
      <CustomButton
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    textAlign: 'center',
    flex: 1,
    paddingLeft: -16,
    fontSize: 20,
    fontFamily: Fonts.NunitoSemibold,
    color: type === 'dark' ? colors.white : colors.text.primary,
  }),
});
