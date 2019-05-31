/*
   1. home 容器的 createAction 函数
	2. action 是一个描述我们想要改变什么的对象，
	他需要有一个 属性为 type 值为 字符串 的键值对，对应着 reducer 中生成新 state 状态的规则
	3. dispatch 函数仅可以通过 store.dispatch() 调用，
	如下 createAction 中的 dispatch 是传入的参数，为了配合 redux bindActionCreators() 函数使用
*/

// 将 action.type 抽取为常量，减少出错
import { GET_CLASS_DATA } from '../types-constant';
// 将网络请求抽取出来，方便接口调试，函数返回 Promise
import { getClassListData } from '../../api/index';


// 获取首页信息
export function getClassData(param) {
   return dispatch => {
     getClassListData(param)
         .then(res => dispatch({ type: GET_CLASS_DATA, data:res.data , msg: res.msg }))
         .catch(err => console.log('error ', err));
   };
}
