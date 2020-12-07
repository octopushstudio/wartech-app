import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/Colors';
import {fonts} from '../../../utils';
// import {colors, fonts} from 'utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = (props) => {
  const {isMe, text, date, photo} = props;
  if (isMe) {
    return <Other text={text} date={date} />;
  }
  return <IsMe photo={photo} text={text} date={date} />;
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    backgroundColor: colors.cardLight,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
