import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import tw from 'tailwind-react-native-classnames';
import useConvertToVND from '../../hooks/useConvertToVND';
import IconBtnOnly from '../buttons/IconBtnOnly';

interface Props {
  item?: object;
}

const ProductInfoContainer: React.FC<Props> = (props: Props) => {
  const { item } = props;

  return (
    <View>
      <View className="m-5">
        <Text numberOfLines={2} className="text-black">
          {item.name}
        </Text>
        <View className="flex-row items-center my-3">
          <Rating
            style={tw`items-start mr-2`}
            type="star"
            startingValue={item.ratingAvg}
            imageSize={10}
            readonly
            ratingCount={5}

          />
          <Text>{item.ratingAvg}</Text>
          <View className="h-full w-0.5 bg-gray-200 mx-3"></View>
          <Text>Đã bán 200</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-xl">{useConvertToVND(item.price)}</Text>
          <View className="flex-row">
            <IconBtnOnly icon={faShareAlt} />
            <IconBtnOnly icon={faFacebookMessenger} style="ml-3" />
          </View>
        </View>
      </View>
      <View className="h-2 bg-gray-100"></View>
    </View>
  );
};

export default ProductInfoContainer;
