
import React, {Component} from 'react';
import Spin from '../../../components/Spin'

import PhotoList from '../../../components/PhotoList';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
  };
  componentDidMount() {
    this.props.getIndexData()
  }
  render() {
    const {indexState:{indexList}} = this.props;
    if (!indexList.length) {
      return (<Spin />)
    } else {
      return (indexList.length && <PhotoList list={indexList} />)
    }
  }
}

