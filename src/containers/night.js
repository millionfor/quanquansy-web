import React, { Component } from 'react';
import { connect } from 'react-redux';

import NightCom from './pages/Night/index';
import {bindActionCreators} from 'redux';
import {getClassData} from '../modules/night/actions';

class Night extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <NightCom {...this.props} />;
  }
}

export default connect(
  state => ({ nightState: state.night }),
  dispatch => ({
    getClassData: bindActionCreators(getClassData, dispatch),
  })
)(Night);
