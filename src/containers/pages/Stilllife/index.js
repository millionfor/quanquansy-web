
import React, {Component} from 'react';

import PhotoList from '../../../components/PhotoList';
class Stilllife extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getClassData({
      classifysEnName:'stilllife'
    });
  }
  render() {
    const {stilllifeState:{list}} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Stilllife;

