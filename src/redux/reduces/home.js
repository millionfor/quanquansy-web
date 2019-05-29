/**
 * @author        quanquan
 * @dateTime      2019-03-28  11:03:50
 * @description   home
 */

import axios from 'axios';

const HOME_SUCCESS = 'home/HOME_SUCCESS';
const HOME_FAIL = 'home/HOME_FAIL';

const initialState = {
  indexList: [],
  quanquanInfo: {}
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case HOME_SUCCESS:
      return {
        ...state,
        ...action,
      };
    case HOME_FAIL:
      return {
        ...state,
        msg: action.msg
      };
    default:
      return state;
  }
}

/**
 * 获取index数据
 * test
 */
export function initActive() {
  return async dispatch => {
    await axios.get('/syApi/external/hotIndex')
      .then(res => {
        const {hotBanner, hotList, configData} = res.data.data;
        dispatch({
          type: HOME_SUCCESS,
          indexList: [...hotBanner, ...hotList],
          quanquanInfo: configData
        });
      })
      .catch(e => {
        const {msg} = e.data;
        dispatch({
          type: HOME_FAIL,
          data: msg
        });
      });
  };
}
