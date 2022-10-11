import ShippingServices from '../../services/ShippingServices';
import useDefaultAddress from '../useDefaultAddress';

const useSetDefault = () => {
  const {defaultAddress, dispatchDefaultAddress} = useDefaultAddress();

  const setDefault = (id: string) => {
    ShippingServices.setDefault(id)
      .then(res => {
        console.log(res);
        dispatchDefaultAddress(res);
      })
      .catch(err => console.log(err));
  };

  return setDefault;
};

export default useSetDefault;
