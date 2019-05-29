import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as homeActions from '../redux/reduces/home';
import Nav from '../components/nav';
import Canvas from '../components/canvas';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentDidMount() {
  }
  componentWillMount() {
    const {history} = this.props;
    history.push('/index');
  }
  render() {
    const {children} = this.props;
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
        {children}
        <Canvas />
      </div>
    );
  }
}

export default App;
