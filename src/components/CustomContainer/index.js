import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import CustomloadingScreen from '../CustomLoadingScreen';
import {colors} from '../../constants/Colors';

const CustomContainer = (props) => {
  const {children, loading, stylesProps} = props;
  return (
    <View style={[styles.container, stylesProps]}>
      {children}
      {loading && <CustomloadingScreen />}
    </View>
  );
};

export default CustomContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
});
