
import React, {Component} from 'react';

class ThreeYears extends Component {
  componentWillMount() {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div className="canvas-diamond">
          <div className="animation bounceIn photo-3th" id="photo-3th"> </div>
          <div className="bg"> </div>
          <div id="introduce" style={{opacity: 1}}> </div>
        </div>
        <div className="animation bounceInRight time-list-module" id="time-list-module">
          <ul>
            <li><span>3</span>年</li>
            <li><span>36</span>个月</li>
            <li><span>1095</span>天</li>
            <li><span>26280</span>个小时</li>
            <li><span>1576800</span>分钟</li>
            <li><span>94608000</span>秒</li>
            <li><span>近80000</span>次快门</li>
            <li><span>4台</span>佳能机器</li>
            <li><span>8000+</span>的图片数量</li>
            <li><span>700+</span>G图片硬盘</li>
            <li><span>THINK’S</span></li>
            <li>感谢一起成长的朋友们</li>
            <li>感谢每一位信任让我拍摄的麻豆们</li>
            <li>感谢那些深夜教我LR调色的网友们。</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ThreeYears;
