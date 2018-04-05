import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './src/components/Home';
import HymnView from './src/components/HymnView';
import store from './src/store';

const SimpleApp = StackNavigator(
  {
    Home: { screen: Home },
    HymnView: { screen: HymnView },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#59c139',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);


export default () => (
  <Provider store={store}>
    <SimpleApp />
  </Provider>
);
