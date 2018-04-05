import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

export default class HymnView extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>POOPOOO</Text>
      </View>);
  }
}

HymnView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
