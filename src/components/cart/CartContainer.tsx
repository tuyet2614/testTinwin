import {useState} from 'react';
import {faAngleRight, faStore} from '@fortawesome/free-solid-svg-icons';
import {FlatList, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useConvertToVND from '../../hooks/useConvertToVND';
import useTotalPrice from '../../hooks/wishlist/useTotalPrice';
import CartItem from './CartItem';
import SelectAllCartItem from './SelectAllCartItem';
import Loading from '../Loading';

interface Props {
  title: string;
  data: object[];
  onPress?: () => void;
  loading: boolean;
}

const CartContainer: React.FC<Props> = (props: Props) => {
  const {title, data, onPress, loading} = props;

  const [isCheck, setIsCheck] = useState(false);
  const renderItem = ({item}) => <CartItem item={item} isCheckAll={isCheck} />;

  // const totalPrice = useTotalPrice();

  return !loading && data[0] !== undefined ? (
    <View>
      <SelectAllCartItem
        title={title}
        icon={faStore}
        iconRight={faAngleRight}
        onPress={onPress}
        setIsCheck={setIsCheck}
        isCheck={isCheck}
      />
      <FlatList
        contentContainerStyle={tw`mx-5`}
        data={data}
        keyExtractor={key => key.id}
        renderItem={renderItem}
      />
      {/* <View className="flex-row mx-5 justify-between my-2">
    <Text>Tổng tiền hàng</Text>
    {!loading && (
      <Text className="text-orange-400 font-bold">
        {useConvertToVND(totalPrice)}
      </Text>
    )}
  </View> */}
    </View>
  ) : (
    <Loading />
  );
};

export default CartContainer;
