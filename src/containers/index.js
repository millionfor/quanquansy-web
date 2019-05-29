
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as homeActions from '../redux/reduces/home';
import indexData from '../components/indexData';
import PhotoList from '../components/photoList';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)

class Index extends Component {
  state = {
  };
  componentDidMount() {
  }
  render() {
    const {photoList} = this.props;
    return (<PhotoList list={photoList} />);
  }
}

export default indexData(Index);
