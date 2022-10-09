import {SET_USER, UPDATE_INFO_USER} from './constants';

const updateInfo = (data: object) => ({
  type: UPDATE_INFO_USER,
  payload: data,
});

const setUser = (data: object) => ({
  type: SET_USER,
  payload: data,
});

export {updateInfo, setUser};
