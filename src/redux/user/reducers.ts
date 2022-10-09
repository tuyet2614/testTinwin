import {GET_USER, SET_USER, UPDATE_INFO_USER} from './constants';

interface UserState {
  user: object;
}

const initState: UserState = {
  user: {},
};

const userReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_USER:
      return state;
    case SET_USER:
      return {...state, user: action.payload};
    case UPDATE_INFO_USER:
      return {...state, user: action.payload};
    default:
      return state;
  }
};

export default userReducer;
