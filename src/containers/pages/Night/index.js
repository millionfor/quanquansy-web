
import React, {Component} from 'react';

import PhotoList from '../../../components/PhotoList';
class Night extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getClassData({
      classifysEnName:'night'
    });
  }
  render() {
    const {nightState:{list}} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Night;

