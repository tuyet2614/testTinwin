import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AddressItem from '../../components/address/AddressItem';
import BtnPrimary from '../../components/BtnPrimary';
import CartContainer from '../../components/cart/CartContainer';
import SelectAllCartItem from '../../components/cart/SelectAllCartItem';
import HeaderStack from '../../components/HeaderStack';
import Loading from '../../components/Loading';
import useGetAddress from '../../hooks/address/useGetAddress';
import useBuyFromCart from '../../hooks/cart/useBuyFromCart';
import useGetCart from '../../hooks/cart/useGetCart';
import useConvertToVND from '../../hooks/useConvertToVND';
import useDefaultAddress from '../../hooks/useDefaultAddress';
import useDeleteAllWishlist from '../../hooks/wishlist/useDeleteAllWishlist';
import useTotalPrice from '../../hooks/wishlist/useTotalPrice';
import {NAVIGATE_CART_ADDRESS} from '../../navigation/navigate';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistId, getWishlistState} from '../../redux/wishlist/selectors';

const CartScreen: React.FC = () => {
  const navigation = useNavigation();
  const deleteAllWishlist = useDeleteAllWishlist();
  const {defaultAddress, dispatchDefaultAddress} = useDefaultAddress();
  const [checkAllSupplier, setCheckAllSupplier] = useState(false);

  const dataCart = useSelector(getWishlistState);

  const {cart, loading} = useGetCart();
  const addresses = useGetAddress();
  const sum = useTotalPrice();

  const navigateCartAddress = () => {
    navigation.navigate(NAVIGATE_CART_ADDRESS);
  };

  const dispatchRedux = useDispatch();
  const dispatchCart = (data: object) => {
    dispatchRedux(setWishlist(data));
  };

  useEffect(() => {
    addresses !== undefined &&
      dispatchDefaultAddress(
        addresses.find((item: object) => item.isDefault === true),
      );
  }, [addresses]);
  useEffect(() => {
    cart.length > 0 && dispatchCart(cart);
  }, [cart]);

  const {buyFromCart, data} = useBuyFromCart();
  const onBuy = () => {
    buyFromCart();
  };

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
          {dataCart !== undefined &&
          dataCart.length !== 0 &&
          cart.length >= dataCart.length - 2 ? (
            <View>
              <SelectAllCartItem
                setIsCheck={setCheckAllSupplier}
                isCheck={checkAllSupplier}
                title="Tất cả"
                iconRight={faTrash}
                onPress={() => deleteAllWishlist()}
              />
              <View className="h-0.5 bg-gray-200" />
              {/* {cartBySupplier.length > 0 &&
                cartBySupplier.map((item, index) => (
                  <CartContainer
                    data={item}
                    title={
                      item[0].supplier !== undefined
                        ? item[0].supplier.storeName
                        : 'ABC'
                    }
                    loading={loading}
                  />
                ))} */}
              <CartContainer
                data={dataCart}
                title={'ABC'}
                loading={loading}
                checkAllSupplier={checkAllSupplier}
              />
            </View>
          ) : dataCart.length === 0 ? (
            <View className="h-96 items-center justify-center">
              <Text>Không có sản phẩm nào trong giỏ</Text>
            </View>
          ) : (
            <View className="h-96">
              <Loading />
            </View>
          )}
        </ScrollView>
      ) : (
        <Loading />
      )}
      <View className="m-3">
        <View className="my-3 flex-row justify-between">
          <Text>Tổng cộng</Text>
          <Text className="text-orange-primary">{useConvertToVND(sum)}</Text>
        </View>
        <BtnPrimary text="Mua hàng" style="p-3 items-center" onPress={onBuy} />
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
