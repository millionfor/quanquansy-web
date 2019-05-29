
import React, {Component} from 'react';

import PhotoList from '../components/photoList';
import HOCFactoryFactory from '../components/getData';

@HOCFactoryFactory({classifysType: 'night'})
class Night extends Component {
  render() {
    const {list} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Night;

