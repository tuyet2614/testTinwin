import {useDispatch} from 'react-redux';
import {deleteFromWishlist, setWishlist} from '../../redux/wishlist/actions';
import useGetCart from '../cart/useGetCart';

const useDeleteFromWishlist = () => {
  const dispatchRedux = useDispatch();
  const {cart} = useGetCart();

  const dispatchDeleteFromWishlist = (data: object) => {
    // dispatchRedux(deleteFromWishlist(data))

    // const cartAfter = cart.filter(item => item.productId !== data.productId);
    // console.log(cartAfter);
    dispatchRedux(
      setWishlist(cart.filter(item => item.productId !== data.productId)),
    );
  };

  return dispatchDeleteFromWishlist;
};

export default useDeleteFromWishlist;
