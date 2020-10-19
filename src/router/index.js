import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  MainAuthScreen,
  SignUpScreen
} from '../screens';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="MainAuthScreen" component={MainAuthScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Router;
