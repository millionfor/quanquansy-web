import React, { Component } from 'react';
import { connect } from 'react-redux';

import AboutToShootCom from './pages/AboutToShoot/index';

class AboutToShoot extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AboutToShootCom {...this.props} />;
  }
}

export default connect()(AboutToShoot);
