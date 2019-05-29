/**
 * @author        quanquan
 * @dateTime      2019-39-28  15:39:57
 * @description   High order component 高阶组件
 */

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)

export default function indexData(WarpComponents) {
  return class extends React.Component {
    async componentDidMount() {
      const {initActive} = this.props;
      await initActive();
    }
    render() {
      const {home: {quanquanInfo, indexList}} = this.props;
      return <WarpComponents quanquanInfo={quanquanInfo} photoList={indexList} {...this.props} />;
    }
  };
}
