import {useDispatch} from 'react-redux';
import {setAddress} from '../../redux/address/actions';
import ShippingServices from '../../services/ShippingServices';

const useSetDefault = () => {
  const dispatchRedux = useDispatch();
  const dispatchAddress = (data: object[]) => {
    dispatchRedux(setAddress(data));
  };

  const setDefault = (id: string) => {
    ShippingServices.setDefault(id)
      .then(res => {
        console.log(res);
        ShippingServices.getShippingAddress()
          .then(res => {
            dispatchAddress(res.data.items);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  return setDefault;
};

export default useSetDefault;
