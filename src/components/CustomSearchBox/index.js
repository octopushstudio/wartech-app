import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {fonts} from '../../utils';
import {colors} from '../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Fonts } from '../../assets';

const CustomSearchBox = (props) => {
  const {
    label,
    value,
    onChangeText,
    secureTextEntry,
    disabled,
    isError,
    errorType,
  } = props;
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };

  const errorText = (type) => {
    switch (type) {
      case 'email':
        return '*Email tidak valid!';
        break;

      default:
        return '* field ini harus diisi';
        break;
    }
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={!disabled}
        selectTextOnFocus={!disabled}
        placeholder="Mau makan apa hari ini?"
        style={styles.input(isError, border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      <Icon
        name="search"
        size={22}
        solid
        color={'#B1B7C2'}
        style={styles.searchIcon}
      />
      {isError ? (
        <Text style={styles.errorLabel}>{errorText(errorType)}</Text>
      ) : null}
    </View>
  );
};

export default CustomSearchBox;

const styles = StyleSheet.create({
  input: (isError, border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: isError ? 'red' : border,
    backgroundColor: '#E9E9E9',
    fontSize: 16,
    paddingVertical: 12,
    paddingLeft: 46,
    fontFamily: Fonts.NunitoSemibold
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  errorLabel: {
    fontSize: 14,
    color: colors.error,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
  searchIcon: {position: 'absolute', top: 31, left: 11},
});
