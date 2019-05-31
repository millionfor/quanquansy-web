import React, { Component } from 'react';
import { connect } from 'react-redux';

import ThreeYearsCom from './pages/ThreeYears/index';

class ThreeYears extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ThreeYearsCom {...this.props} />;
  }
}

export default connect()(ThreeYears);
