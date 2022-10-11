import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setAddress} from '../../redux/address/actions';
import {getAddressState} from '../../redux/address/selectors';
import ShippingServices from '../../services/ShippingServices';
import UserServices from '../../services/UserServices';
import useDefaultAddress from '../useDefaultAddress';

const useGetAddress = () => {
  const [res, setRes] = useState();
  const {defaultAddress} = useDefaultAddress();
  const dispatchRedux = useDispatch();
  const dispatchAddress = (data: object[]) => {
    dispatchRedux(setAddress(data));
  };
  const addresses = useSelector(getAddressState);

  const fn = async () => {
    await ShippingServices.getShippingAddress()
      .then(res => {
        setRes(res.data.items);
        dispatchAddress(res.data.items);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fn();
  }, []);

  return addresses;
};

export default useGetAddress;
