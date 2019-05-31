import React, { Component } from 'react';
import { connect } from 'react-redux';

import StilllifeCom from './pages/Stilllife/index';
import {bindActionCreators} from 'redux';
import {getClassData} from '../modules/stilllife/actions';

class Stilllife extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <StilllifeCom {...this.props} />;
  }
}

export default connect(
  state => ({ stilllifeState: state.stilllife }),
  dispatch => ({
    getClassData: bindActionCreators(getClassData, dispatch),
  })
)(Stilllife);
