import {useDispatch} from 'react-redux';
import {deleteFromWishlist} from '../../redux/wishlist/actions';
import CartServices from '../../services/CartServices';

const useDeleteFromCart = () => {
  const dispatchRedux = useDispatch();

  const deleteFromCart = (id: string, customerCartId: string, data: object) => {
    CartServices.deleteFromCart(id, customerCartId)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      .then(() => dispatchRedux(deleteFromWishlist(data)));
  };

  return deleteFromCart;
};

export default useDeleteFromCart;
