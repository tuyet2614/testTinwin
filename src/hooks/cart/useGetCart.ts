import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
import CartServices from '../../services/CartServices';

const useGetCart = () => {
  //   const [cart, setCart] = useState();
  const [loading, setLoading] = useState(true);
  const cart = useSelector(getWishlistState);

  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object[]) => {
    dispatchRedux(setWishlist(data));
  };

  useEffect(() => {
    CartServices.getCart()
      .then(res => {
        dispatchCart(res.data.cartItems);
      })
      .catch(err => console.log(err))
      .then(() => setLoading(false));
  }, []);

  return {
    cart,
    loading,
  };
};

export default useGetCart;
