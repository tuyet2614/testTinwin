import {get, post, postHeadersUrl, put, putUpload} from './AxiosHelper';

const UserServices = {
  getUser(params) {
    return get('/auth/api/account/my-profile', params);
  },
  login(postData) {
    return postHeadersUrl('/auth/connect/token', postData);
  },
  uploadAvatar(putData) {
    return putUpload('/auth/api/account/my-profile/update-avatar', putData);
  },
  updateInfo(putData) {
    return put('/auth/api/account/my-profile/update-profile', putData);
  },
};

export default UserServices;
