import {useState} from 'react';
import {useSelector} from 'react-redux';
import {getWishlistState} from '../../redux/wishlist/selectors';

const useBuyFromCart = () => {
  const [data, setData] = useState([]);

  const dataCart = useSelector(getWishlistState);

  const buyFromCart = () => {
    setData(dataCart.filter((item: object) => item.isCheck === true));
    
  };

  return {
    data,
    buyFromCart,
  };
};

export default useBuyFromCart;
