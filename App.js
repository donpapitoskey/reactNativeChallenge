/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import AppNavigator from './navigation/AppNavigator';
import {enableScreens} from 'react-native-screens';
import client from './services/apollo';
import {ApolloProvider} from '@apollo/client';

enableScreens();

const App: () => React$Node = () => {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
};

export default App;
