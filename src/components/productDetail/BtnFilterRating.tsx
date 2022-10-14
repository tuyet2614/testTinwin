import {Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-ratings';
import tw from 'tailwind-react-native-classnames';

interface Props {
  text: string;
  num?: number;
  onPress?: () => void;
  rating?: number;
  isChoose?: boolean;
}

const BtnFilterRating: React.FC<Props> = (props: Props) => {
  const {text, num, onPress, rating, isChoose} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border ${
        isChoose ? 'border-orange-400' : 'border-gray-200'
      } items-center mb-2 p-2 rounded-lg`}>
      {text !== undefined ? (
        <Text
          className={`${text !== undefined && 'w-36'} ${
            isChoose ? 'text-orange-400' : ''
          } text-center`}>
          {text}
        </Text>
      ) : (
        <Rating
          style={tw`items-center justify-center px-${
            text === undefined ? '2' : '0'
          }`}
          type="star"
          startingValue={rating}
          imageSize={10}
          readonly
          ratingCount={rating}
        />
      )}
      <Text className={`${isChoose ? 'text-orange-400' : ''}`}>({num})</Text>
    </TouchableOpacity>
  );
};

export default BtnFilterRating;
