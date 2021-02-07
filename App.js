import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import {LoseConnection} from './src/screens/ErrorPages';
import Pushy from 'pushy-react-native';

// UI Kitten :
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

// Push Methods :
// Please place this code in App.js,
// After the import statements, and before the Component class

Pushy.setNotificationListener(async (data) => {
    // Print notification payload data
    console.log('Received notification: ' + JSON.stringify(data));

    // Notification title
    let notificationTitle = 'MyApp';

    // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
    let notificationText = data.message || 'Test notification';

    // Display basic system notification
    Pushy.notify(notificationTitle, notificationText, data);

    // Clear iOS badge count
    Pushy.setBadge && Pushy.setBadge(0);
});
// End Pushy methods

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    tryAgain();
    PushyListener();
    doRegisterPushyApp();
  }, []);

  const doRegisterPushyApp = () => {
    // Register the user for push notifications
    Pushy.register()
      .then(async (deviceToken) => {
        // Display an alert with device token
        alert('Pushy device token: ' + deviceToken);

        // Send the token to your backend server via an HTTP GET request
        //await fetch('https://your.api.hostname/register/device?token=' + deviceToken);

        // Succeeded, optionally do something to alert the user
      })
      .catch((err) => {
        // Handle registration errors
        console.error(err);
      });
  }

  const PushyListener = () => {
    // Start the Pushy service
    Pushy.listen();
  };

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
