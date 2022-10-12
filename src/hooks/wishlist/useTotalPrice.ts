import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getWishlistState} from '../../redux/wishlist/selectors';
import useGetProductById from '../productDetail/useGetProductById';

const useTotalPrice = () => {
  let data = useSelector(getWishlistState);
  const [total, setTotal] = useState(0);
  // let total = 0;

  useEffect(() => {
    setTotal(0);
    data.map((item: object) =>
      setTotal(prv => (prv += item.quantity * item.price)),
    );
    console.log({total: data});
  }, [data]);

  return total;
};

export default useTotalPrice;
