// 引入reducer
import { combineReducers } from 'redux';
import index from './index/reducer';
import landscapes from './landscapes/reducer';
import night from './night/reducer';
import deliciousfood from './deliciousfood/reducer';
import stilllife from './stilllife/reducer';
import animal from './animal/reducer';
import people from './people/reducer';

// 合并到主reducer
const reducers = {
  index,
  landscapes,
  night,
  deliciousfood,
  stilllife,
  animal,
  people
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer
export default combineReducers(reducers);
