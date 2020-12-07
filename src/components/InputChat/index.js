import {CustomButton} from './../../components';
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../constants/Colors';
import {fonts} from '../../utils';

const InputChat = (props) => {
  const {onChangeText, value, onPress} = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Dr.Chandra"
        value={value}
        onChangeText={onChangeText}
      />
      <CustomButton
        disable={value.length < 1}
        type="btn-icon-send"
        onPress={onPress}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    maxHeight: 45,
  },
});
