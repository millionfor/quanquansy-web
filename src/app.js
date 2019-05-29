import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

import Root from './router';

//globe css
import './style/index.styl';
import './style/less.less';
import './style/sass.sass';
import './style/scss.scss';

window.axios = axios;

const tid = localStorage.getItem('tid');
axios.defaults.headers.tid = tid || ''; // axios headers token
axios.interceptors.response.use(
  res => res,
  err => {
    const {data: {err: errnum, error}} = (err || {}).response;
  }
);

ReactDOM.render(<Root />, document.getElementById('app'));
