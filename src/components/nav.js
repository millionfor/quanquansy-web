import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: [
        {
          key: 'index',
          name: 'HOME',
          title: '首页'
        }, {
          key: 'landscapes',
          name: 'LANDSCAPES',
          title: '风景'
        }, {
          key: 'night',
          name: 'NIGHT',
          title: '夜景'
        }, {
          key: 'deliciousfood',
          name: 'DELICIOUS FOOD',
          title: '美食'
        }, {
          key: 'stilllife',
          name: 'STILLLIFE',
          title: '静物'
        }, {
          key: 'animal',
          name: 'ANIMAL',
          title: '动物'
        }, {
          key: 'people',
          name: 'PEOPLE',
          title: '人像'
        }, {
          key: 'about',
          name: 'ABOUT',
          title: '关于作者'
        }, {
          key: 'about-to-shoot',
          name: 'ABOUT TO SHOOT',
          title: '关于约拍'
        }, {
          key: 'three-years',
          name: '3TH ANNIVERSARY',
          title: '圈圈摄影3年了'
        }
      ],
    };
  }
  render() {
    const {navList} = this.state;
    const {location} = this.props;
    return (
      navList.map(item => (
        <li key={item.key} className={`/${item.key}` === location.pathname ? 'active' : ''}>
          <NavLink to={{pathname: item.key}} key={item.key}>
            {item.name}
          </NavLink>
        </li>
      ))
    );
  }
}


export default withRouter(Nav);
