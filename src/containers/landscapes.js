
import React, {Component} from 'react';

import PhotoList from '../components/photoList';
import HOCFactoryFactory from '../components/getData';

@HOCFactoryFactory({classifysType: 'landscapes'})
class Landscapes extends Component {
  render() {
    const {list} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Landscapes;
