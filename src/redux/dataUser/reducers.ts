import {GET_USER_SUCCESS} from './constants';

interface UserState {}

const initState: UserState = {};

const dataUserReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case GET_USER_SUCCESS:
      return {...state, currentUser: action.data};
    default:
      return state;
  }
};

export default dataUserReducer;
