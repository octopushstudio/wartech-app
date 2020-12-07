import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcLoseConnection} from '../../assets';
import {
  CustomButton,
  CustomContainer,
  CustomText,
  Gap,
  CustomBody,
} from '../../components';
import {checkConnection} from '../../utils/checkConnection';

const LoseConnection = ({isConnected}) => {
  return (
    <CustomContainer
      stylesProps={{
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <CustomBody type="medium" stylesProps={{alignContent: 'center'}}>
        <Gap height={158} />
        <IcLoseConnection />
        <Gap height={100} />
        <CustomText stylesProps={styles.text} size="verylarge">
          Oops! Madam?
        </CustomText>
        <Gap height={16} />
        <CustomText size="large" color="secondcolor" stylesProps={styles.text}>
          Tampaknya Anda tidak terhubung dengan koneksi Internet
        </CustomText>
        <Gap height={40} />
        <CustomButton
          onPress={() => {
            checkConnection((callback) => {
              isConnected(callback);
            });
          }}
          title="Coba Lagi"
          stylesProps={{borderRadius: 50}}
        />
      </CustomBody>
    </CustomContainer>
  );
};

export default LoseConnection;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: 250,
  },
});
