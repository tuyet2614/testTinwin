import {useDispatch} from 'react-redux';
import {setAddress} from '../../redux/address/actions';
import ShippingServices from '../../services/ShippingServices';

const useUpdateAddress = () => {
  const dispatchRedux = useDispatch();
  const dispatchAddress = (data: object[]) => {
    dispatchRedux(setAddress(data));
  };

  const updateAddress = async (id: string, data: object) => {
    const putData = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      specificAddress: data.specificAddress,
      shippingAddressType: data.shippingAddressType,
      isDefault: data.isDefault,
      provinceId: data.provinceId,
      districtId: data.districtId,
      wardId: data.wardId,
    };

    await ShippingServices.updateAddress(id, putData)
      .then(res => {
        ShippingServices.getShippingAddress()
          .then(res => {
            dispatchAddress(res.data.items);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  return updateAddress;
};

export default useUpdateAddress;
