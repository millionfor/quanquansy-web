import React, { Component } from 'react';
import { connect } from 'react-redux';

import LandscapesCom from './pages/Landscapes/index';
import {bindActionCreators} from 'redux';
import {getClassData} from '../modules/landscapes/actions';

class Landscapes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <LandscapesCom {...this.props} />;
  }
}

export default connect(
  state => ({ landscapesState: state.landscapes }),
  dispatch => ({
    getClassData: bindActionCreators(getClassData, dispatch),
  })
)(Landscapes);
