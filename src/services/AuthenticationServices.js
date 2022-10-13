import AsyncStorage from '@react-native-async-storage/async-storage';
import {client_id, client_secret, grant_type} from '../Ultis/Constant/const';
import {postHeadersUrl} from './AxiosHelper';

const AuthenticationServices = {
  login(params) {
    return postHeadersUrl('/auth/connect/token', {
      ...params,
      client_id: client_id,
      client_secret: client_secret,
      grant_type: grant_type,
    });
  },
};

export default AuthenticationServices;
