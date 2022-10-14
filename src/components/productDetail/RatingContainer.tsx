import {faStar} from '@fortawesome/free-regular-svg-icons';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import tw from 'tailwind-react-native-classnames';
import {colors} from '../../assets/colors';
import {NAVIGATE_RATING} from '../../navigation/navigate';
import ProductDetailTitle from './ProductDetailTitle';
import RatingItem from './RatingItem';

export const arr: object[] = [
  {
    id: 1,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Phạm Quang Long',
    comment: 'abc',
    rating: 3.4,
  },
  {
    id: 2,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Tuyết',
    comment: 'abc',
    rating: 4.6,
  },
  {
    id: 3,
    image: require('../../assets/logoTinwinPrimary.png'),
    name: 'Thái',
    comment: 'abc',
    rating: 4.9,
  },
];

interface Props {
  item?: object;
}

const RatingContainer: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();

  const {item} = props;

  const renderItem = ({item}) => <RatingItem item={item} />;
  const navigateRating = () => {
    navigation.navigate(NAVIGATE_RATING);
  };

  return (
    <View>
      <ProductDetailTitle icon={faStar} title="Đánh giá sản phẩm" />
      <TouchableOpacity
        className="flex-row items-center justify-between mx-5 mb-5"
        onPress={navigateRating}>
        <View className="flex-row items-center">
          <Rating
            style={tw`items-start mr-2`}
            type="star"
            startingValue={4.5}
            imageSize={10}
            readonly
            ratingCount={5}
          />
          <Text className="text-xs">4.5 / 5 (10.5k Đánh giá)</Text>
        </View>
        <View className="flex-row items-center">
          <Text className="text-orange-400">Xem tất cả</Text>
          <FontAwesomeIcon icon={faAngleRight} color={colors.primary} />
        </View>
      </TouchableOpacity>
      <View className="h-0.5 bg-gray-100 mx-5"></View>
      <FlatList
        contentContainerStyle={tw`mx-5 my-3`}
        data={arr}
        keyExtractor={key => key.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RatingContainer;
