import {faCheckCircle, faXmarkCircle} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, setWishlist} from '../../redux/wishlist/actions';
import {getWishlistId, getWishlistState} from '../../redux/wishlist/selectors';
import CartServices from '../../services/CartServices';
import useShowNotification from '../useShowNotification';

const useAddToCart = () => {
  const cart = useSelector(getWishlistState);
  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object[]) => {
    dispatchRedux(setWishlist(data));
  };

  const {dispatchShowNotification, notification} = useShowNotification();
  const addToCart = (item: object) => {
    const postData = {
      productId: item.id,
      quantity: 1,
    };

    CartServices.addToCart(postData)
      .then(res => {
        if (res.data.error !== undefined) {
          dispatchShowNotification({
            icon: faXmarkCircle,
            text: res.data.error.message,
            visible: true,
          });
        } else {
          dispatchRedux(addToWishlist({...item, quantity: 1}));
          dispatchShowNotification({
            icon: faCheckCircle,
            text: 'Đã thêm vào giỏ',
            visible: true,
          });
        }
      })
      .catch(err => console.log(err))
      .then(() =>
        setTimeout(
          () =>
            dispatchShowNotification({
              visible: false,
            }),
          1000,
        ),
      );
  };

  return {
    cart,
    addToCart,
  };
};

export default useAddToCart;
