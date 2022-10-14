import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../assets/colors';
import useCheckCartItem from '../../hooks/cart/useCheckCartItem';
import useGetProductById from '../../hooks/productDetail/useGetProductById';
import useConvertToVND from '../../hooks/useConvertToVND';
import useDeleteFromWishlist from '../../hooks/wishlist/useDeleteFromWishlist';
import {NAVIGATE_PRODUCT_DETAIL} from '../../navigation/navigate';
import Quantity from './Quantity';

interface Props {
  item: object;
  onChange?: void;
  isCheckAll?: boolean;
}

const CartItem: React.FC<Props> = (props: Props) => {
  const {item, onChange, isCheckAll} = props;
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigation = useNavigation();

  const dispatchDeleteFromWishlist = useDeleteFromWishlist();

  const checked = () => {
    setIsChecked(!isChecked);
    onChange !== undefined && onChange();
  };

  const navigateProductDetail = () => {
    navigation.navigate(NAVIGATE_PRODUCT_DETAIL, {product: item});
  };

  useEffect(() => {
    setIsChecked(isCheckAll);
  }, [isCheckAll]);

  const checkCartItem = useCheckCartItem();
  useEffect(() => {
    checkCartItem(item, isChecked);
  }, [isChecked]);

  return (
    item !== undefined && (
      <View>
        <TouchableOpacity
          className="flex-row py-3"
          onPress={navigateProductDetail}>
          <CheckBox
            boxType="square"
            style={{padding: 10}}
            onChange={checked}
            value={isChecked}
            tintColor={colors.primary}
            tintColors={{true: colors.primary, false: colors.gray}}
          />
          <View>
            <View className="border border-gray-200 p-2 rounded-lg">
              <Image source={{uri: item.image[0]}} className="w-16 h-16" />
            </View>
            <View className="flex-1"></View>
          </View>

          <View className="ml-3 flex-1">
            <Text className="text-black" numberOfLines={2}>
              {item.name}
            </Text>
            <Text className="text-xs">Mã SP: {item.id}</Text>
            <Text className="text-orange-400 my-2">
              {useConvertToVND(item.price)}
            </Text>
            <View className="flex-row items-center justify-between">
              <Quantity quantity={item.quantity} item={item} />
              <TouchableOpacity
                onPress={() => dispatchDeleteFromWishlist(item)}>
                <Text className="text-orange-400">Xoá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
        <View className="h-0.5 bg-gray-200"></View>
      </View>
    )
  );
};

export default CartItem;
