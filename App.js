import React from 'react';
import Router from './src/router';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

// UI Kitten :
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Router />
          <FlashMessage position="top" />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};

export default App;
