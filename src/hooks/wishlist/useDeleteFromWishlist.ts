import {useDispatch} from 'react-redux';
import {deleteFromWishlist, setWishlist} from '../../redux/wishlist/actions';
import useDeleteFromCart from '../cart/useDeleteFromCart';
import useGetCart from '../cart/useGetCart';

const useDeleteFromWishlist = () => {
  const deleteFromCart = useDeleteFromCart();

  const dispatchDeleteFromWishlist = (data: object) => {
    deleteFromCart(data.customerCartId, data.customerCartItemId, data);
  };

  return dispatchDeleteFromWishlist;
};

export default useDeleteFromWishlist;
