import {CLEAR_USER, GET_USER_FAIL, GET_USER_SUCCESS} from './constants';

interface UserState {}

const initState: UserState = {};

const dataUserReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_USER_SUCCESS:
      return {...state, currentUser: action.data};
    case GET_USER_FAIL:
      return {...state, currentUser: {}};
    case CLEAR_USER:
      return {...state, currentUser: {}};
    default:
      return state;
  }
};

export default dataUserReducer;
