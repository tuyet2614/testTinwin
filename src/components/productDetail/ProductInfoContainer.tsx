import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';
import tw from 'tailwind-react-native-classnames';
import IconBtnOnly from '../buttons/IconBtnOnly';

interface Props {
  item?: object;
}

const ProductInfoContainer: React.FC<Props> = (props: Props) => {
  const { item } = props;

  return (
    <View>
      <View className="m-5">
        <Text numberOfLines={2}>Tên sản phẩm</Text>
        <View className="flex-row items-center my-3">
          <Rating
            style={tw`items-start mr-2`}
            type="star"
            startingValue={4.5}
            imageSize={10}
            readonly
            ratingCount={5}

          />
          <Text>4.5</Text>
          <View className="h-full w-0.5 bg-gray-200 mx-3"></View>
          <Text>Đã bán 200</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="text-xl">100.000đ</Text>
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
