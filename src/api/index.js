
import {get} from './request';

export function getCommonData() {
  return get('/syApi/external/hotIndex').then(res => res.data);
}

export function getClassListData(param) {
  return get('/syApi/external/photoList',param).then(res => res.data);
}
