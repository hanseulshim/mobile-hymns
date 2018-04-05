import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
  },

  description: {
    marginTop: 5,
    fontSize: 14,
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Select a Hymn',
  }

  componentDidMount() {
    this.props.getData();
  }

  selectHymn = (item) => {
    const { navigate } = this.props.navigation;
    this.props.selectHymn(item);
    navigate('HymnView', { title: item.title });
  }

  renderItem = ({ item }) => (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => this.selectHymn(item)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return this.props.loading ? (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating />
      </View>
    ) : (
      <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
        <FlatList
          ref={(c) => { this.listRef = c; }}
          data={this.props.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.dataReducer.loading,
  data: state.dataReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

Home.propTypes = {
  getData: PropTypes.func.isRequired,
  selectHymn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
