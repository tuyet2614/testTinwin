import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddressItem from '../../components/address/AddressItem';
import BtnPrimary from '../../components/BtnPrimary';
import CartContainer from '../../components/cart/CartContainer';
import SelectAllCartItem from '../../components/cart/SelectAllCartItem';
import HeaderStack from '../../components/HeaderStack';
import Loading from '../../components/Loading';
import useGetAddress from '../../hooks/address/useGetAddress';
import useGetCart from '../../hooks/cart/useGetCart';
import useDefaultAddress from '../../hooks/useDefaultAddress';
import useDeleteAllWishlist from '../../hooks/wishlist/useDeleteAllWishlist';
import {NAVIGATE_CART_ADDRESS} from '../../navigation/navigate';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistId, getWishlistState} from '../../redux/wishlist/selectors';

const CartScreen: React.FC = () => {
  const navigation = useNavigation();
  const deleteAllWishlist = useDeleteAllWishlist();
  const {defaultAddress, dispatchDefaultAddress} = useDefaultAddress();

  const dataCart = useSelector(getWishlistState);
  console.log({dataCart});

  const {cart, loading} = useGetCart();
  const addresses = useGetAddress();

  const navigateCartAddress = () => {
    navigation.navigate(NAVIGATE_CART_ADDRESS);
  };

  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object) => {
    dispatchRedux(setWishlist(data));
  };
  // useEffect(() => {

  // }, []);
  // console.log({
  //   bySupplier: dataCart.filter(
  //     (item, index) =>
  //       index !== 0 && item.supplierId === dataCart[index - 1].supplierId,
  //   ),
  // });

  useEffect(() => {
    addresses !== undefined &&
      dispatchDefaultAddress(
        addresses.find((item: object) => item.isDefault === true),
      );
    cart.length > 0 && dispatchCart(cart);
  }, [cart]);

  return (
    <SafeAreaView className="bg-white flex-1">
      <HeaderStack text="Giỏ hàng" isGoback={true} />
      {!loading ? (
        <ScrollView className="h-full flex-1">
          {defaultAddress !== undefined && (
            <AddressItem
              item={defaultAddress}
              icon={require('../../assets/icons/account/location.png')}
              onPress={navigateCartAddress}
            />
          )}
          {dataCart !== undefined && dataCart.length === cart.length ? (
            <View>
              <SelectAllCartItem
                title="Tất cả"
                iconRight={faTrash}
                onPress={() => deleteAllWishlist()}
              />
              <View className="h-0.5 bg-gray-200" />
              {/* {cart.filter((item, index) => {

              })} */}
              <CartContainer data={dataCart} title="A" loading={loading} />
            </View>
          ) : dataCart.length === 0 ? (
            <View className="h-96 items-center justify-center">
              <Text>Không có sản phẩm nào trong giỏ</Text>
            </View>
          ) : (
            <Loading />
          )}
        </ScrollView>
      ) : (
        <Loading />
      )}
      <View className="m-3">
        <View className="my-3">
          <Text>Tổng cộng</Text>
        </View>
        <BtnPrimary text="Mua hàng" style="p-3 items-center" />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
