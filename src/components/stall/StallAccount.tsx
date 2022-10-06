import {Image, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import tw from 'tailwind-react-native-classnames';

interface Props {
  item?: object;
}

const StallAccount: React.FC<Props> = (props: Props) => {
  const {item} = props;

  return (
    <View className="flex-row m-5">
      <Image
        source={require('../../assets/logoTinwinPrimary.png')}
        className="h-14 w-14 bg-blue-400 rounded-full"
      />
      <View className="ml-3">
        <Text className="text-lg">Tên gian hàng</Text>
        <Text className="text-xs">
          <Text className="text-orange-400">12345</Text> Sản phẩm
        </Text>
        <View className="flex-row items-center">
          <Rating
            style={tw`items-start mr-2`}
            type="star"
            startingValue={4.5}
            imageSize={10}
            readonly
            ratingCount={5}
          />
          <Text className="text-xs text-orange-400">4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default StallAccount;
