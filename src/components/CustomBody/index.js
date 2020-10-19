import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {colors} from '../../constants/Colors';

const CustomBody = ({children, type}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.content(type)}>
      {children}
    </ScrollView>
  );
};

export default CustomBody;

const styles = StyleSheet.create({
  content: (type) => ({
    flex: 1,
    backgroundColor: colors.white,
    padding: type === 'medium' ? 40 : 16,
  }),
});
