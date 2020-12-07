import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { colors } from '../../../constants/Colors';
import { fonts } from '../../../utils';
// import {colors, fonts} from '../utils';

const IsMe = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chatContent: {
    backgroundColor: colors.primary,
    padding: 12,
    minWidth: 100,
    paddingRight: 18,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.black,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 12,
  },
});
