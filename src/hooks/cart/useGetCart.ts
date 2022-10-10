import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
import CartServices from '../../services/CartServices';
import useGetProductById from '../productDetail/useGetProductById';

const useGetCart = () => {
  const [cartAfter, setCartAfter] = useState<object[]>([]);
  const [loading, setLoading] = useState(true);
  const cart = useSelector(getWishlistState);

  const {product, getProduct} = useGetProductById();

  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object[]) => {
    dispatchRedux(setWishlist(data));
  };

  useEffect(() => {
    CartServices.getCart()
      .then(res => {
        res.data.cartItems.forEach((item: object) =>
          getProduct(item.productId),
        );
      })
      .then(() => product !== undefined && dispatchCart(product))
      .catch(err => console.log(err))
      .then(() => setLoading(false));
  }, []);

  return {
    cart,
    loading,
  };
};

export default useGetCart;
