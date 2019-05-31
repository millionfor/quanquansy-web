
import React, {Component} from 'react';

import PhotoList from '../../../components/PhotoList';
class Animal extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getClassData({
      classifysEnName:'animal'
    });
  }
  render() {
    const {animalState:{list}} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Animal;

