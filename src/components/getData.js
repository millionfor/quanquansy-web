/**
 * @author        quanquan
 * @dateTime      2019-52-29  13:52:34
 * @description   获取所有list数据 高阶组件
 */

import axios from 'axios';
import React, {Component} from 'react';

export default function HOCFactoryFactory(params) {
  return function HOCFactory(WrappedComponent) {
    return class HOC extends Component {
      state = {
        list: []
      };
      async componentDidMount() {
        await axios.get(`/syApi/external/photoList?classifysEnName=${params.classifysType}`)
          .then(res => {
            const {data} = res.data;
            this.setState({
              list: data.list
            });
          });
      }
      componentWillUnmount() {
        this.setState = (state, callback) => '';
      }
      render() {
        const {list} = this.state;
        return (
          <WrappedComponent
            list={list}
            {...this.props}
          />
        );
      }
    };
  };
}

