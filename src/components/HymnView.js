import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { moderateScale } from '../helper/utils';
import * as Actions from '../actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(15),
  },
  scrollView: {
    width: '100%',
    backgroundColor: '#fff',
  },
  lyrics: {
    fontSize: moderateScale(15),
  },
});

class HymnView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.title : '',
    };
  };

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.lyrics}>{this.props.lyrics}</Text>
        </View>
      </ScrollView>
    );
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
