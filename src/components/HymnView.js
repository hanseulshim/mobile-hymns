import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

class HymnView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : '',
    };
  };

  render() {
    return (
      <View>
        <Text>{this.props.lyrics}</Text>
      </View>);
  }
}

const mapStateToProps = state => ({
  lyrics: state.hymnReducer.lyrics,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

HymnView.propTypes = {
  lyrics: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HymnView);
