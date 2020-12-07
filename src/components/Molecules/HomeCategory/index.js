import React, {useState, useEffect} from 'react';
import { Fragment } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {CustomText} from '../../../components';
import {colors} from '../../../constants/Colors';
import Gap from '../../Gap';
import {Fire} from '../../../config'

const data = [
  {category: 'Makanan'},
  {category: 'Minuman'},
  {category: 'Snack'},
  {category: 'Desert'},
  {category: 'Party'},
];

const HomeCategory = () => {
  useEffect(() => {
    Fire.database()
      .ref('Hospitals/')
      .once('value')
      .then((res) => {
        console.log(res);
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <View style={styles.container}>
      <CustomText size="large" weight="semibold">
        Kategori
      </CustomText>
      <Gap height={10} />
      <View style={styles.row}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, i) => (
            <Fragment key={"key-"+i}>
              <Gap width={16} />
              <View style={styles.boxContainer}>
                <View style={styles.box}></View>
                <Gap height={5} />
                <CustomText size="regular" weight="light">
                  {item.category}
                </CustomText>
              </View>
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  boxContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -16,
    marginRight: -16,
  },
  column: {flexDirection: 'column', flex: 1},
  column_end: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  },
  box: {
    width: 80,
    height: 80,
    borderColor: colors.border,
    borderRadius: 10,
    borderWidth: 1,
  },
});
