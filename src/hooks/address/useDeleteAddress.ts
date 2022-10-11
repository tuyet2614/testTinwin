import {useDispatch} from 'react-redux';
import {setAddress} from '../../redux/address/actions';
import ShippingServices from '../../services/ShippingServices';

const useDeleteAddress = () => {
  const dispatchRedux = useDispatch();
  const dispatchAddress = (data: object[]) => {
    dispatchRedux(setAddress(data));
  };

  const deleteAddress = (id: string) => {
    ShippingServices.deleteAddress(id)
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

  return deleteAddress;
};

export default useDeleteAddress;
