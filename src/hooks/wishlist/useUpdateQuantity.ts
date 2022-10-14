import {useDispatch} from 'react-redux';
import {setWishlist, updateQuantity} from '../../redux/wishlist/actions';
import CartServices from '../../services/CartServices';

const useUpdateQuantity = () => {
  const dispatchRedux = useDispatch();
  const dispatchUpdateQuantity = (data: object, quantity: number) => {
    dispatchRedux(updateQuantity({id: data.id, quantity: quantity}));

    const putData = {
      customerCartId: data.customerCartId,
      customerCartItemId: data.customerCartItemId,
      productId: data.id,
      quantity: quantity,
    };

    CartServices.updateQuantity(putData)
      .then(res => {
        // dispatchRedux(setWishlist(res.data.cartItems));
      })
      .catch(err => console.log(err));
  };

  return dispatchUpdateQuantity;
};

export default useUpdateQuantity;
