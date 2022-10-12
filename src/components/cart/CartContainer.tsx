import {useEffect, useState} from 'react';
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
  const [totalPrice, setTotalPrice] = useState(0);
  const renderItem = ({item}) => <CartItem item={item} isCheckAll={isCheck} />;

  const sum = useTotalPrice();

  // useEffect(() => {
  //   setTotalPrice(sum);
  // }, []);

  return (
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
      <View className="flex-row mx-5 justify-between my-2">
        <Text>Tổng tiền hàng</Text>
        {!loading && data.length > 0 && (
          <Text className="text-orange-400 font-bold">
            {useConvertToVND(sum)}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CartContainer;
