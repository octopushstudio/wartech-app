import React from 'react';
import {StyleSheet, View, Image, Platform} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors} from '../../constants/Colors';

// Screen :
import SignUpScreen from './SignUpScreen';
import LoginScreen from './LoginScreen';

// Constants :
const logo = require('assets/icons/restaurant-symbol.png');
const Tab = createMaterialTopTabNavigator();

const MainAuthScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          indicatorStyle: {backgroundColor: colors.primary},
          inactiveTintColor: colors.disable,
          labelStyle: {
            fontFamily: 'Nunito-Bold',
            fontSize: 16,
            textTransform: 'capitalize',
          },
        }}>
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'Daftar'}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoContainer: {
    paddingVertical: Platform.OS === 'ios' ? 50 : 30,
    backgroundColor: colors.white,
  },
});
export default MainAuthScreen;
