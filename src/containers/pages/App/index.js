/*
   App 容器组件的子组件，顶部状态栏
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'; // 类型检查捕获错误

import '../../../scss/app.scss';

import Nav from '../../../components/Nav';
import Canvas from '../../../components/Canvas';

class AppCom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="nav-module">
          <div className="logo">
            <a className="ico-logo"> </a>
          </div>
          <div className="fn-clear"> </div>
          <div className="nav-list">
            <ul>
              <Nav />
            </ul>
          </div>
          <div className="shars">
            <a href="" title=""><i className="ico-1"> </i></a>
            <a href="" title=""><i className="ico-2"> </i></a>
            <a href="" title=""><i className="ico-3"> </i></a>
            <a href="" title=""><i className="ico-4"> </i></a>
          </div>
          <div className="fn-clear"> </div>
          <div className="copyright">
            <span>© COPYRIGHT 2017 QUANQUANSY.COM </span>
          </div>
        </div>
        {this.props.children}
        <Canvas />
      </div>
    );
  }
}
// 设置默认值
AppCom.defaultProps = {
   title: 'default title'
};

// 规定类型
AppCom.propTypes = {
   title: PropTypes.string
};

export default withRouter(AppCom);
