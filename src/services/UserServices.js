import {get, post, postHeadersUrl} from './AxiosHelper';

const UserServices = {
  getUser(params) {
    return get('/auth/api/account/my-profile', params);
  },
  login(postData) {
    return postHeadersUrl('/auth/connect/token', postData);
  },
};

export default UserServices;
