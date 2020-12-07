import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Gap, CustomText, CustomSearchBox} from '../../../components';

// Const :
const imageProfile =
  'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Icon name="bars" size={22} solid color={colors.secondary} />
        </View>
        <View style={styles.column_end}>
          <Icon name="bell" size={22} solid color={colors.secondary} />
        </View>
      </View>
      <Gap height={16} />
      <View style={styles.row}>
        <Image source={{uri: imageProfile}} style={{height: 32, width: 32}} />
        <Gap width={12} />
        <CustomText size="large">Hallo, Okky</CustomText>
      </View>

      <CustomSearchBox />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  column: {flexDirection: 'column', flex: 1},
  column_end: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  },
});
