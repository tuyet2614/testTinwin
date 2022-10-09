import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../redux/user/actions';
import {getUserState} from '../../redux/user/selectors';
import UserServices from '../../services/UserServices';

const useGetUser = () => {
  const userInfo = useSelector(getUserState);
  const dispatchRedux = useDispatch();
  const dispatchSetUser = (data: object) => {
    dispatchRedux(setUser(data));
  };

  var qs = require('qs');
  var data = qs.stringify({
    client_id: 'Mobile_Retailer',
    client_secret: '1q2w3E*',
    grant_type: 'password',
    username: '0332727355',
    password: '12345678Aa@',
  });

  useEffect(() => {
    const fn = async () => {
      await UserServices.login(data)
        .then(res => {
          AsyncStorage.setItem('token', res.data.access_token);
        })
        .catch(err => console.log(err));
      await UserServices.getUser()
        .then(res => {
          dispatchSetUser(res.data);
          console.log(res);
        })
        .catch(err => console.log(err));
    };
    fn();
  }, []);

  return userInfo;
};

export default useGetUser;
