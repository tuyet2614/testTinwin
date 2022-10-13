import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getWishlistState} from '../../redux/wishlist/selectors';

const useTotalPriceBySupplier = (data: object[]) => {
  const [total, setTotal] = useState(0);
  const dataCart = useSelector(getWishlistState);

  useEffect(() => {
    console.log({useTotalPriceBySupplier: data});
    setTotal(0);
    data.map((item: object) =>
      setTotal(prv => (prv += item.quantity * item.price)),
    );
  }, [data]);

  return total;
};

export default useTotalPriceBySupplier;
