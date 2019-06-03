
import React, {Component} from 'react';
import PhotoList from '../../../components/PhotoList';

class People extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getClassData({
      classifysEnName:'people'
    });
  }
  render() {
    const {peopleState:{list}} = this.props;
    return (<PhotoList list={list} />);
  }
}

export default People;

