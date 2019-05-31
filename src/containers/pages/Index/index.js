
import React, {Component} from 'react';

import PhotoList from '../../../components/PhotoList';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getIndexData()
  }
  render() {
    const {indexState:{indexList}} = this.props;
    return (indexList.length && <PhotoList list={indexList} />);
  }
}

