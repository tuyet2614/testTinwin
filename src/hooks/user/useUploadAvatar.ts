import UserServices from '../../services/UserServices';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUser} from '../../redux/user/actions';
import {getUserState} from '../../redux/user/selectors';
import useGetUser from './useGetUser';

const useUploadAvatar = () => {
  const userInfo = useSelector(getUserState);
  const dispatchRedux = useDispatch();
  const dispatchUploadAvatar = (data: object) => {
    dispatchRedux(setUser(data));
  };

  const upload = (path: any) => {
    console.log(path);
    let data = new FormData();
    data.append('Image', {uri: path, type: 'image/jpg', name: 'image.jpg'});

    UserServices.uploadAvatar(data)
      .then(res => {
        console.log(res);
        dispatchUploadAvatar({...userInfo, picture: res.data});
      })
      .catch(err => console.log(err));
  };

  return {
    upload,
  };
};

export default useUploadAvatar;
