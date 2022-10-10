import {get} from './AxiosHelper';

const UserServices = {
  getUser() {
    return get('/auth/connect/userinfo');
  },
};

export default UserServices;
