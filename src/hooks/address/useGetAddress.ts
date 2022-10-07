import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect, useState} from 'react';
import ShippingServices from '../../services/ShippingServices';
import UserServices from '../../services/UserServices';

const useGetAddress = () => {
  const [res, setRes] = useState();

  const fn = async () => {
    await ShippingServices.getShippingAddress()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return fn;
};

export default useGetAddress;
