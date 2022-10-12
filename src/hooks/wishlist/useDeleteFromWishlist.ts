import {useDispatch} from 'react-redux';
import {deleteFromWishlist, setWishlist} from '../../redux/wishlist/actions';
import useDeleteFromCart from '../cart/useDeleteFromCart';
import useGetCart from '../cart/useGetCart';

const useDeleteFromWishlist = () => {
  const dispatchRedux = useDispatch();
  const deleteFromCart = useDeleteFromCart();

  const dispatchDeleteFromWishlist = (data: object) => {
    dispatchRedux(deleteFromWishlist(data));

    deleteFromCart(data.customerCartId, data.customerCartItemId);
  };

  return dispatchDeleteFromWishlist;
};

export default useDeleteFromWishlist;
