import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Home from './src/components/Home';
import HymnView from './src/components/HymnView';
import store from './src/store';
import { moderateScale } from './src/helper/utils';

const SimpleApp = StackNavigator(
  {
    Home: { screen: Home },
    HymnView: { screen: HymnView },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerBackTitle: 'Back',
      headerStyle: {
        backgroundColor: '#59c139',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: moderateScale(13),
      },
      headerBackTitleStyle: {
        fontSize: moderateScale(11),
      },
    },
  },
);


export default () => (
  <Provider store={store}>
    <SimpleApp />
  </Provider>
);
