import {postHeadersUrl} from './AxiosHelper';

const AuthenticationServices = {
  login(params) {
    return postHeadersUrl('/auth/connect/token', params);
  },
};

export default AuthenticationServices;
