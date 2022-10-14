import {useDispatch} from 'react-redux';
import {setAddress} from '../../redux/address/actions';
import ShippingServices from '../../services/ShippingServices';
import useGetAddress from './useGetAddress';

const useAddNewAddress = () => {
  const dispatchRedux = useDispatch();
  const dispatchAddress = (data: object[]) => {
    dispatchRedux(setAddress(data));
  };

  const addNewAddress = (data: object) => {
    const postData = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      specificAddress: data.specificAddress,
      shippingAddressType: data.shippingAddressType,
      isDefault: data.isDefault,
      provinceId: data.provinceId,
      districtId: data.districtId,
      wardId: data.wardId,
    };
    ShippingServices.addNewAddress(postData)
      .then(res => {
        ShippingServices.getShippingAddress()
          .then(res => {
            dispatchAddress(res.data.items);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  return addNewAddress;
};

export default useAddNewAddress;
