
import React, {Component} from 'react';


class About extends Component {
  constructor(props) {
    super(props);
  }
  state = {
  };
  componentWillMount() {
    this.props.getIndexData();
  }
  render() {
    const {
      quanquanInfo:{address, email, gender, name, poco, qq, wangyi, wechat, weibo}
    } = this.props.indexState;
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

export default About;
