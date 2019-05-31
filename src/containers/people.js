import React, { Component } from 'react';
import { connect } from 'react-redux';

import PeopleCom from './pages/People/index';
import {bindActionCreators} from 'redux';
import {getClassData} from '../modules/people/actions';

class People extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <PeopleCom {...this.props} />;
  }
}

export default connect(
  state => ({ peopleState: state.people }),
  dispatch => ({
    getClassData: bindActionCreators(getClassData, dispatch),
  })
)(People);
