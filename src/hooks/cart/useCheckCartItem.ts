import {useDispatch} from 'react-redux';
import {checkItemWishlist} from '../../redux/wishlist/actions';

const useCheckCartItem = () => {
  const dispatchRedux = useDispatch();
  const dispatchCheckCartItem = (item: object, isCheck: boolean) => {
    dispatchRedux(checkItemWishlist({item, isCheck}));
  };

  return dispatchCheckCartItem;
};

export default useCheckCartItem;
