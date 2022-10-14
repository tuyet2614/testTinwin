import {useState} from 'react';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import useConvertToVND from '../../hooks/useConvertToVND';
import useAddToWishlist from '../../hooks/wishlist/useAddToWishlist';
import BtnIcon from '../BtnIcon';
import useShowNotification from '../../hooks/useShowNotification';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import {NAVIGATE_PRODUCT_DETAIL} from '../../navigation/navigate';
import tw from 'tailwind-react-native-classnames';
import {darkestGrey, white} from '../../constant/const';
import useAddToCart from '../../hooks/cart/useAddToCart';

interface Props {
  item: object;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const {item} = props;

  const {cart, addToCart} = useAddToCart();

  const navigateProductDetail = () => {
    navigation.navigate(NAVIGATE_PRODUCT_DETAIL, {product: item});
  };

  const onAddToCart = () => {
    // dispatchAddToWishlist({...item, quantity: 1});
    addToCart(item);
  };

  return (
    <TouchableOpacity
      onPress={navigateProductDetail}
      className="p-3 border border-gray-200 rounded-lg mb-3 w-44">
      <View className={`w-full h-32`}>
        <Image
          source={
            item.image !== null
              ? {uri: item.image[0]}
              : require('../../assets/logoTinwinPrimary.png')
          }
          className={`w-full h-full`}
        />
        {item.retailerTotalQuantity === 0 ? (
          <View style={styles.soldout}>
            <Text style={styles.soldoutText}>Hết hàng</Text>
          </View>
        ) : (
          ''
        )}
      </View>
      <Text
        className="text-lg font-bold text-black h-16 my-2"
        numberOfLines={2}>
        {item.name}
      </Text>
      <Text>Đã bán {item.soldByCustomer}</Text>
      <Rating
        style={tw`items-start mt-3`}
        type="star"
        startingValue={item.ratingAvg}
        imageSize={10}
        readonly
        ratingCount={5}
      />
      <Text className="text-orange-400 text-xl font-bold my-2">
        {useConvertToVND(item.price)}
      </Text>
      <View className="flex-row justify-between">
        <TouchableOpacity className=" rounded-lg px-4 py-2 bg-orange-100">
          <Text className="text-black">Mua ngay</Text>
        </TouchableOpacity>
        <BtnIcon
          icon={faCartArrowDown}
          style="py-2 px-4"
          onPress={onAddToCart}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  soldout: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.8,
    backgroundColor: darkestGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  soldoutText: {
    color: white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
