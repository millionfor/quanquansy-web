
import React, {Component} from 'react';

import PhotoList from '../../../components/PhotoList';
class Deliciousfood extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getClassData({
      classifysenname:'deliciousfood'
    });
  }
  render() {
    const {deliciousfoodState:{list}} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Deliciousfood;

