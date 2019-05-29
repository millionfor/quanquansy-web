
import React, {Component} from 'react';

import PhotoList from '../components/photoList';
import HOCFactoryFactory from '../components/getData';

@HOCFactoryFactory({classifysType: 'animal'})
class Animal extends Component {
  render() {
    const {list} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Animal;

