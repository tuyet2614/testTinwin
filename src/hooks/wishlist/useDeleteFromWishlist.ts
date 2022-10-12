import {useDispatch} from 'react-redux';
import {deleteFromWishlist, setWishlist} from '../../redux/wishlist/actions';
import useGetCart from '../cart/useGetCart';

const useDeleteFromWishlist = () => {
  const dispatchRedux = useDispatch();

  const dispatchDeleteFromWishlist = (data: object) => {
    dispatchRedux(deleteFromWishlist(data));
  };

  return dispatchDeleteFromWishlist;
};

export default useDeleteFromWishlist;
