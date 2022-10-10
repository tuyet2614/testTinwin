import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setWishlist} from '../../redux/wishlist/actions';
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
  const dispatchCart = (data: object[]) => {
    dispatchRedux(setWishlist(data));
  };

  cartAfter.length === 0 &&
    CartServices.getCart()
      .then(res => {
        setCartAfter(res.data.cartItems);
      })
      .catch(err => console.log(err))
      .then(() => setLoading(false));

  // let arr = [];

  const fn = async () => {
    // await CartServices.getCart()
    //   .then(res => {
    //     setCartAfter(res.data.cartItems);
    //   })
    //   .catch(err => console.log(err))
    //   .then(() => setLoading(false));
    cartAfter.length !== 0 &&
      cartAfter.forEach(async (item: object) => {
        await ProductServices.getProductDetail(item.productId)
          .then(res => {
            data.push({...res.data, quantity: item.quantity});
          })
          // .then(() => dispatchCart(arr))
          .catch(err => console.log(err));
      });

    data.length > 0 && dispatchCart(data);
  };

  useEffect(() => {
    fn();
    // console.log({cart});
  }, [cartAfter]);

  return {
    cart,
    loading,
  };
};

export default useGetCart;
