
import React, {Component} from 'react';

class DetailsList extends Component {
  state = {
  };
  componentWillUnmount() {
  }
  render() {
    const {detailsInfo} = this.props;
    return (
      <div className="details-content">
        <div className="lt-content">
          {
            detailsInfo.photos_path.map(item => (
              <div className="list" key={item.uid} >
                <img src={item.imgInfo.url} key={item.uid} />
                <p>{detailsInfo.photos_desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default DetailsList;
