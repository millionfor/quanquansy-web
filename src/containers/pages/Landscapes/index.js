
import React, {Component} from 'react';
import PhotoList from '../../../components/PhotoList';
class Landscapes extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getClassData({
      classifysEnName:'landscapes'
    });
  }
  render() {
    const {landscapesState:{list}} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default Landscapes;
