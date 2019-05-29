
import React, {Component} from 'react';

class AboutToShoot extends Component {
  render() {
    return (
      <div className="list-module" style={{left: '10%'}}>
        <div className="row">
          <div className="animation bounceInRight item-abp" id="time-list-module">
            <i className="ico-toshoot"> </i>
            <div className="title">
              <span><i>A</i>BOUT TO SHOOT</span>
              <p>
                约 · 拍照
              </p>
            </div>
            <div className="list-cont">
              <div className="list">
                <span className="n">&nbsp;</span>
                <span className="l"><i className="ipc-qcode"> </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutToShoot;
