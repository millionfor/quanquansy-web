import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeliciousfoodCom from './pages/Deliciousfood/index';
import {bindActionCreators} from 'redux';
import {getClassData} from '../modules/deliciousfood/actions';

class Deliciousfood extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DeliciousfoodCom {...this.props} />;
  }
}

export default connect(
  state => ({ deliciousfoodState: state.deliciousfood }),
  dispatch => ({
    getClassData: bindActionCreators(getClassData, dispatch),
  })
)(Deliciousfood);
