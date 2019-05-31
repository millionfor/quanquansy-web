import React, { Component } from 'react';
import { connect } from 'react-redux';

import IndexCom from './pages/Index/index';
import {bindActionCreators} from 'redux';
import { getIndexData } from '../modules/index/actions';


class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <IndexCom {...this.props} />;
  }
}

export default connect(
  state => ({ indexState: state.index }),
  dispatch => ({
    getIndexData: bindActionCreators(getIndexData, dispatch),
  })
)(Index);
