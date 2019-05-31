import React, {Component} from 'react';
import axios from 'axios';

import DetailsList from './detailsList';

class PhotoList extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isDetails: false,
    detailsInfo: {},
    list:[{
      _id:1,
      imageView:'https://www.baidu.com/img/baidu_jgylogo3.gif'
    }]
  };
  _hanlderDetails = async (id) => {
    await axios.get(`/syApi/external/photoDetails?id=${id}`)
      .then(res => {
        this.setState({
          detailsInfo: res.data
        });
        setTimeout(() => {
          this.setState({
            isDetails: true
          });
        }, 600);
      });
  };
  componentDidMount() {
  }
  render() {
    const {list} = this.props;
    const {isDetails,detailsInfo: {data}} = this.state;
    return (
      <div>
        <div className="list-module listData">
          <div className="row">
            <div className="animation bounceInRight photo-list" id="photo-list">
              {
                list.map(item => (
                  <div className="list" key={item._id}>
                    <a onClick={this._hanlderDetails.bind(this, item._id)}>
                      <img src={item.imageView} key={item._id} />
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        {isDetails && (
          <div className={`details-module animation ${this.isDetails ? 'bounceOutRight' : 'bounceInRight'}`}>
            <div className="title">
              <i className="ico-camera"> </i>
              <h1 id="photoName">{data.photos_title}</h1>
              <p id="uploadDate">{data.updateTime}</p>
              <a className="return" onClick={() => this.setState({isDetails: false})}>
                <i className="ico-return"> </i>
              </a>
            </div>
            {data && (<DetailsList detailsInfo={data} />)}
          </div>
        )}
      </div>
    );
  }
}


export default PhotoList;
