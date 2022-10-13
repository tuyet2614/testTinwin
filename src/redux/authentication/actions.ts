export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
const login = (data: object) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export {login};
