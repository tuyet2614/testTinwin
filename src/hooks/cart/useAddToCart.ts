import {faCheckCircle, faXmarkCircle} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
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
    console.log(item);
    const postData = {
      customerCartId: cart[0].customerCartId,
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
          setTimeout(
            () =>
              dispatchShowNotification({
                visible: false,
              }),
            1000,
          );
        } else {
          dispatchCart(res.data.cartItems);
          dispatchShowNotification({
            icon: faCheckCircle,
            text: 'Đã thêm vào giỏ',
            visible: true,
          });
          setTimeout(
            () =>
              dispatchShowNotification({
                visible: false,
              }),
            1000,
          );
        }
      })
      .catch(err => console.log(err));
  };

  return {
    cart,
    addToCart,
  };
};

export default useAddToCart;
