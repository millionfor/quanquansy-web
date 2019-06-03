
import React, {Component} from 'react';
import Spin from '../../../components/Spin'
import PhotoList from '../../../components/PhotoList';
class Landscapes extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    loading: true,
  };
  componentWillMount() {
    this.props.getClassData({
      classifysEnName:'landscapes'
    });
  }
  render() {
    const {landscapesState:{list}} = this.props;
    if (!list.length) {
      return (<Spin />)
    } else {
      return (<PhotoList list={list} />)
    }
  }
}

export default Landscapes;
