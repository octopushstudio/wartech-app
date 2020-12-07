import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {fonts} from '../../utils';
import {colors} from '../../constants/Colors';

const CustomInput = (props) => {
  const {
    label,
    value,
    onChangeText,
    secureTextEntry,
    disabled,
    isError,
    errorType,
    inputType,
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
        multiline
        selectTextOnFocus={!disabled}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(isError, border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {isError ? (
        <Text style={styles.errorLabel}>{errorText(errorType)}</Text>
      ) : null}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: (isError, border) => ({
    borderWidth: 1,
    borderRadius: 10,
    borderColor: isError ? 'red' : border,
    padding: 12,
    paddingTop: 10,
    height: 135,
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
});
