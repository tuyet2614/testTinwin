import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
import CartServices from '../../services/CartServices';
import ProductServices from '../../services/ProductServices';
import useGetProductById from '../productDetail/useGetProductById';

const useGetCart = () => {
  const [cartAfter, setCartAfter] = useState<object[]>([]);
  const [loading, setLoading] = useState(true);
  const cart = useSelector(getWishlistState);
  const [data, setData] = useState<object[]>([]);

  const {product, getProduct} = useGetProductById();

  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object) => {
    dispatchRedux(setWishlist(data));
  };

  // let arr = [];

  const fn = () => {
    CartServices.getCart()
      .then(res => {
        dispatchCart({id: res.data.id, wishlist: []});
        console.log(cart);
        // setCartAfter(res.data.cartItems);
        res.data.cartItems.map((item: object) =>
          ProductServices.getProductDetail(item.productId)
            .then(res => {
              console.log('a');
              setData(prv => [...prv, {...res.data, quantity: item.quantity}]);
              // dispatchRedux(addToWishlist(res.data));
            })
            .catch(err => console.log(err)),
        );
      })
      .then(() => dispatchCart({id: cart.id, wishlist: data}))
      .catch(err => console.log(err))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fn();
    // console.log({cart});
  }, []);

  return {
    cart: cart.wishlist,
    loading,
  };
};

export default useGetCart;
