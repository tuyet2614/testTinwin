import {get, post, postHeadersUrl, put, putUpload} from './AxiosHelper';

const UserServices = {
  getUser(params) {
    return get('/webbff/auth/api/account/my-profile', params);
  },
  login(postData) {
    return postHeadersUrl('/webbff/auth/connect/token', postData);
  },
  uploadAvatar(putData) {
    return putUpload(
      '/webbff/auth/api/account/my-profile/update-avatar',
      putData,
    );
  },
  updateInfo(putData) {
    return put('/webbff/auth/api/account/my-profile/update-profile', putData);
  },
};

export default UserServices;
