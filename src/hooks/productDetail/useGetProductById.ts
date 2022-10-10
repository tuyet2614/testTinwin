import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
import ProductServices from '../../services/ProductServices';

const useGetProductById = () => {
  const [res, setRes] = useState();
  const cart = useSelector(getWishlistState);

  const getProduct = (id: string) => {
    ProductServices.getProductDetail(id)
      .then(res => {
        cart.push(res.data);
        // console.log(cart);
        setRes(cart);
      })
      .catch(err => console.log(err));
  };

  return {
    product: res,
    getProduct,
  };
};

export default useGetProductById;
