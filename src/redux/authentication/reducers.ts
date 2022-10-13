import {LOGIN_SUCCESS, LOGIN_FAIL} from './actions';
interface AuthState {
  auth: object;
  errorMsg: string;
}

const initState: AuthState = {
  auth: {},
  errorMsg: '',
};

const authReducer = (state = initState, action: any) => {
  switch (action?.type) {
    case LOGIN_SUCCESS:
      state = {...state, auth: action.data};
      break;
    case LOGIN_FAIL:
      state = {...state, errorMsg: action.err};
      break;
  }
  return state;
};

export default authReducer;
