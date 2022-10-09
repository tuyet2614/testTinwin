import {useDispatch, useSelector} from 'react-redux';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
import useDeleteFromWishlist from './useDeleteFromWishlist';

const useDeleteAllWishlist = () => {
  const wishlist = useSelector(getWishlistState);

  //   const wishlist = wishlistSelector.wishlist;
  const dispatchDeleteFromWishlist = useDeleteFromWishlist();
  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object[]) => {
    dispatchRedux(setWishlist(data));
  };

  const deleteAllWishlist = () => {
    // wishlist.forEach((item: object) => dispatchDeleteFromWishlist(item));
    dispatchCart([]);
  };

  return deleteAllWishlist;
};

export default useDeleteAllWishlist;
