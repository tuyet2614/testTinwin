import {GET_USER, CLEAR_USER} from './constants';
const getUser = () => ({
  type: GET_USER,
});
const clearUser = () => ({
  type: CLEAR_USER,
});

export {getUser, clearUser};
