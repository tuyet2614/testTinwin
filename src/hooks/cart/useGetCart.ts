import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';
import CartServices from '../../services/CartServices';
import ProductServices from '../../services/ProductServices';
import SupplierServices from '../../services/SupplierServices';
import useGetProductById from '../productDetail/useGetProductById';

const useGetCart = () => {
  const [loading, setLoading] = useState(true);
  const cart = useSelector(getWishlistState);
  const [data, setData] = useState<object[]>([]);

  // let arr = [];

  const fn = () => {
    CartServices.getCart()
      .then(response => {
        response.data.cartItems.map((item: object) =>
          ProductServices.getProductDetail(item.productId)
            .then(res => {
              // dispatchRedux(addToWishlist(res.data));
              const params = {
                ids: res.data.supplierId,
              };
              SupplierServices.getSupplier(params)
                .then(resonse => {
                  // console.log({supplier: res});
                  setData(prv => [
                    ...prv,
                    {
                      ...res.data,
                      customerCartId: item.customerCartId,
                      customerCartItemId: item.customerCartItemId,
                      cartId: res.data.id,
                      supplier: resonse.data[0],
                      quantity: item.quantity,
                    },
                  ]);
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err)),
        );
      })
      .catch(err => console.log(err))
      .then(() => setLoading(false));
    // .then(() => {
    //   dispatchCart({id: cart.id, wishlist: data});
    // });
  };

  useEffect(() => {
    fn();
  }, []);

  return {
    cart: data,
    loading,
  };
};

export default useGetCart;
