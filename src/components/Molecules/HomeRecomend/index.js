import React from 'react';
import {Fragment} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CustomText} from '../../../components';
import {colors} from '../../../constants/Colors';
import Gap from '../../Gap';

const data = [
  {category: 'Makanan'},
  {category: 'Minuman'},
  {category: 'Snack'},
  {category: 'Desert'},
  {category: 'Party'},
];

const HomeRecomend = () => {
  return (
    <View style={styles.container}>
      <CustomText size="large" weight="semibold">
        Paling Laris
      </CustomText>
      <Gap height={10} />
      <View style={styles.row}>
        {data.map((item, i) => (
          <Fragment key={'key-' + i}>
            <Gap width={16} />
            <View style={styles.boxContainer}>
              <View style={styles.box}></View>
              <Gap height={5} />
              <CustomText size="regular" weight="light">
                {item.category}
              </CustomText>
              <Gap height={16} />
            </View>
          </Fragment>
        ))}
      </View>
    </View>
  );
};

export default HomeRecomend;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  boxContainer: {
    alignItems: 'center',
    // marginLeft: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -16,
    flexWrap: 'wrap',
  },
  column: {flexDirection: 'column', flex: 1},
  column_end: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  },
  box: {
    width: 180,
    height: 180,
    borderColor: colors.border,
    borderRadius: 10,
    borderWidth: 1,
  },
});
