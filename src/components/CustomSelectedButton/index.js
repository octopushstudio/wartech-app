import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/Colors';
import CustomText from '../CustomText';
import Gap from '../Gap';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomSelectedButton = (props) => {
  const {label, value, onPress} = props;
  return (
    <>
      <CustomText size="large" color="secondcolor">
        {label}
      </CustomText>
      <Gap height={6} />
      <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.btnStyle}>
        <CustomText size="medium" color="secondcolor">
          {value ? value : "Pilih"}
        </CustomText>
        <Icon
          name="chevron-right"
          size={10}
          style={{position: 'absolute', right: 10}}
          color={colors.text.secondary}
        />
      </TouchableOpacity>
    </>
  );
};

export default CustomSelectedButton;

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
