import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getWishlistState} from '../../redux/wishlist/selectors';
import CartServices from '../../services/CartServices';

const useGetCartCount = () => {
  const [count, setCount] = useState(0);
  const dataCart = useSelector(getWishlistState);

  useEffect(() => {
    dataCart.length === 0
      ? CartServices.getCart()
          .then(res => {
            console.log({cartCount: res});
            res.data.cartItems.length > 1
              ? setCount(
                  res.data.cartItems
                    .map(item => item.quantity)
                    .reduce((prv: number, cur: number) => {
                      return prv + cur;
                    }),
                )
              : setCount(0);
          })
          .catch(err => console.log(err))
      : setCount(
          dataCart
            .map(item => item.quantity)
            .reduce((prv: number, cur: number) => {
              return prv + cur;
            }),
        );
  }, [dataCart]);

  return count;
};

export default useGetCartCount;
