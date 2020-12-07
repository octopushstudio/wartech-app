import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  HomeActive,
  HomeInactive,
  ExploreActive,
  ExploreInactive,
  BasketActive,
  BasketInactive,
  AccountActive,
  AccountInactive,
} from '../../assets';
import {colors} from '../../constants/Colors';
import {fonts} from '../../utils';

const TabItem = (props) => {
  const {title, active, onPress, onLongPress} = props;
  const Icon = () => {
    if (title === 'Home') {
      return active ? <HomeActive /> : <HomeInactive />;
    }
    if (title === 'Beranda') {
      return active ? <ExploreActive /> : <ExploreInactive />;
    }
    if (title === 'Keranjang') {
      return active ? <BasketActive /> : <BasketInactive />;
    }
    if (title === 'Profile') {
      return active ? <AccountActive /> : <AccountInactive />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
