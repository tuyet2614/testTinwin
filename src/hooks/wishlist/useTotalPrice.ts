import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getWishlistState} from '../../redux/wishlist/selectors';
import useGetProductById from '../productDetail/useGetProductById';

const useTotalPrice = () => {
  let data = useSelector(getWishlistState);
  let total = 0;
  const cartList = data.map((item: object) => {
    const product = useGetProductById(item.productId);
    return {product, quantity: item.quantity};
  });

  cartList.map(
    (item: object) =>
      item.product !== undefined &&
      (total += item.quantity * item.product.price),
  );

  return total;
};

export default useTotalPrice;
