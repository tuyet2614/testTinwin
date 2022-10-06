import {faAngleRight, faStore} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useConvertToVND from '../../hooks/useConvertToVND';
import useTotalPrice from '../../hooks/wishlist/useTotalPrice';
import CartItem from './CartItem';
import SelectAllCartItem from './SelectAllCartItem';

interface Props {
  title: string;
  data: object[];
  onPress?: () => void;
}

const CartContainer: React.FC<Props> = (props: Props) => {
  const {title, data, onPress} = props;

  const totalPrice = useTotalPrice(data);

  const renderItem = ({item}) => <CartItem item={item} />;

  return (
    <View>
      <SelectAllCartItem
        title={title}
        icon={faStore}
        iconRight={faAngleRight}
        onPress={onPress}
      />
      <FlatList
        contentContainerStyle={tw`mx-5`}
        data={data}
        keyExtractor={key => key.id}
        renderItem={renderItem}
      />
      <View className="flex-row mx-5 justify-between my-2">
        <Text>Tổng tiền hàng</Text>
        <Text className="text-orange-400 font-bold">
          {useConvertToVND(totalPrice)}
        </Text>
      </View>
    </View>
  );
};

export default CartContainer;
