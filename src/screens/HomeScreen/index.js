import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  HomeProfile,
  HomeCategory,
  CustomContainer,
  CustomText,
  CustomBody,
  HomeRecomend,
} from '../../components';

const Homepage = () => {
  return (
    <CustomContainer>
      <ScrollView>
        <HomeProfile />
        <HomeCategory />
        <HomeRecomend />
      </ScrollView>
    </CustomContainer>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
