import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  MainAuthScreen,
  SignUpScreen,
  FeedScreen,
  BasketScreen,
  ProfileScreen,
  AddProductScreen,
  MapsScreen,
  ChattingScreen
} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();


const MainApp = () => {
  return (
    <BottomTab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Beranda" component={FeedScreen} />
      <BottomTab.Screen name="Keranjang" component={BasketScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="MapsScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="MainAuthScreen" component={MainAuthScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="AddProductScreen" component={AddProductScreen} />
      <Stack.Screen name="MapsScreen" component={MapsScreen} />
      <Stack.Screen name="ChattingScreen" component={ChattingScreen} />
    </Stack.Navigator>
  );
};

export default Router;
