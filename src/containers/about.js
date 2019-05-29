
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import indexData from '../components/indexData';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)

class About extends Component {
  state = {
  };
  componentWillUnmount() {
  }
  render() {
    const {
      address, email, gender, name, poco, qq, wangyi, wechat, weibo
    } = this.props.quanquanInfo;
    return (
      <div className="list-module">
        <div className="row">
          <div className="animation bounceInRight item-abp" id="time-list-module">
            <i className="ico-about"> </i>
            <div className="title">
              <span><i>A</i>BOUT</span>
              <p>
                关于作者
              </p>
            </div>
            <div className="list-cont">
              <div className="list">
                <span className="n">NAME</span>
                <span className="l">{name}</span>
              </div>
              <div className="list">
                <span className="n">AGE</span>
                <span className="l">1990/03/19</span>
              </div>
              <div className="list">
                <span className="n">GENDER</span>
                <span className="l">{gender ? '男' : '女'}</span>
              </div>
              <div className="list">
                <span className="n">E-MAIL</span>
                <span className="l">{email}</span>
              </div>
              <div className="list">
                <span className="n">QQ</span>
                <span className="l">{qq}</span>
              </div>
              <div className="list">
                <span className="n">微信</span>
                <span className="l">{wechat}</span>
              </div>
              <div className="list">
                <span className="n">微博</span>
                <span className="l">
                  <a href="http://weibo.com/quanquansy" title="圈圈摄影" target="_blank">
                    {weibo}
                  </a>
                </span>
              </div>
              <div className="list">
                <span className="n">ADDRESS</span>
                <span className="l">{address}</span>
              </div>
              <div className="list">
                <span className="n">
                  POCO网址
                </span>
                <span className="l">
                  <a href="http://quanquansy.poco.cn" title="圈圈摄影" target="_blank">
                    {poco}
                  </a>
                </span>
              </div>
              <div className="list">
                <span className="n">网易摄影</span>
                <span className="l">
                  <a href="http://d2d2.pp.163.com" title="圈圈摄影" target="_blank">
                    {wangyi}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default indexData(About);
