import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import {LoseConnection} from './src/screens/ErrorPages';

// UI Kitten :
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    tryAgain();
  }, []);

  const tryAgain = () => {
    // const unsubscribe = NetInfo.addEventListener((state) => {
    //   setIsConnected(state.isConnected);
    //   console.log('Connection type', state.type);
    //   console.log('Is connected?', state.isConnected);
    // });
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setCount(count + 1);
    });
    // unsubscribe();
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <View style={styles.container}>
            <Router />
          </View>
          <FlashMessage position="top" />
          {!isConnected && (
            <LoseConnection
              isConnected={(status) => {
                setIsConnected(status);
              }}
            />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Platform.OS === 'ios' ? 30 : 0
  },
});

export default App;
