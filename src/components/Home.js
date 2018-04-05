import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';

import { moderateScale } from '../helper/utils';

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#FFF',
    padding: 12,
  },

  title: {
    fontSize: moderateScale(11),
    fontWeight: '600',
  },
});

class Home extends Component {
  static navigationOptions = {
    title: 'Select a Hymn',
  }

  constructor(props) {
    super(props);
    this.state = { searchText: '' };
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
    <TouchableOpacity onPress={() => this.selectHymn(item)}>
      <ListItem
        title={item.title}
        titleStyle={styles.title}
      />
    </TouchableOpacity>
  );

  render() {
    const filteredData = this.props.data.filter(hymn =>
      hymn.title.toLowerCase().includes(this.state.searchText.toLowerCase()));
    return this.props.loading ? (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating />
      </View>
    ) : (
      <View style={styles.container}>
        <SearchBar
          lightTheme
          autocorrect={false}
          onChangeText={searchText => this.setState({ searchText })}
          onClear={() => this.setState({ searchText: '' })}
          value={this.state.searchText}
          clearIcon={{ name: 'clear' }}
          placeholder="Search Hymn..."
        />
        <FlatList
          data={filteredData}
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
