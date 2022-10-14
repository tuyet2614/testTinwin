import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import useGetCart from '../../hooks/cart/useGetCart';
import useGetCartCount from '../../hooks/cart/useGetCartCount';
import {NAVIGATE_CART} from '../../navigation/navigate';
import {setWishlist} from '../../redux/wishlist/actions';
import {getWishlistState} from '../../redux/wishlist/selectors';

interface Props {
  color: string;
  style?: string;
}

const CartBtn: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const {color, style} = props;
  const count = useGetCartCount();

  const navigateCart = () => {
    navigation.navigate(NAVIGATE_CART);
  };

  return (
    <TouchableOpacity className={`${style}`} onPress={navigateCart}>
      <FontAwesomeIcon icon={faCartShopping} color={color} size={25} />
      {count > 0 && (
        <View className="bg-blue-200 w-4 h-4 absolute items-center justify-center rounded-full top-2 right-2">
          <Text className="text-orange-400 text-xs">{count}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartBtn;
