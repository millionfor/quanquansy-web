import React, { Component } from 'react';
import { connect } from 'react-redux';

import AnimalCom from './pages/Animal/index';
import {bindActionCreators} from 'redux';
import {getClassData} from '../modules/animal/actions';

class Animal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AnimalCom {...this.props} />;
  }
}

export default connect(
  state => ({ animalState: state.animal }),
  dispatch => ({
    getClassData: bindActionCreators(getClassData, dispatch),
  })
)(Animal);
