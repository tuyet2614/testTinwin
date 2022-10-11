import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  icon?: ImageSourcePropType;
  text: string;
  index?: number;
  length?: number;
  onPress?: () => void;
  textRight?: string;
}

const AccountItem: React.FC<Props> = (props: Props) => {
  const {icon, text, index, length, textRight, onPress} = props;

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className="flex-row justify-between items-center p-4">
        <View className="flex-row items-center">
          <Image source={icon} />
          <Text
            className={`text-black ${icon !== undefined && 'ml-3'} ${
              icon === undefined && 'w-64'
            }`}
            numberOfLines={2}>
            {text}
          </Text>
        </View>

        <View className="flex-row items-center justify-center">
          <Text className="mr-3">{textRight}</Text>
          <FontAwesomeIcon icon={faAngleRight} />
        </View>
      </TouchableOpacity>
      {index < length - 1 && <View className="h-0.5 bg-gray-100 mx-4"></View>}
    </View>
  );
};

export default AccountItem;
