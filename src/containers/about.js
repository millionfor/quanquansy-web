import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutCom from './pages/About/index';
import {bindActionCreators} from 'redux';
import { getIndexData } from '../modules/index/actions';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AboutCom {...this.props} />;
  }
}

export default connect(
  state => ({ indexState: state.index }),
  dispatch => ({
    getIndexData: bindActionCreators(getIndexData, dispatch),
  })
)(About);

