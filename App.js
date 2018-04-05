import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './src/components/Home';
import HymnView from './src/components/HymnView';
import store from './src/store';

const SimpleApp = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Select a Hymn',
    },
  },
  HymnView: {
    screen: HymnView,
    navigationOptions: {
      title: 'jFeed',
    },
  },
});

export default () => (
  <Provider store={store}>
    <SimpleApp />
  </Provider>
);
