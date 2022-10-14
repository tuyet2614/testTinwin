import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props {
  title: string;
  icon?: ImageSourcePropType;
  textBtn?: string;
}

const HomeTitle: React.FC<Props> = (props: Props) => {
  const {title, icon, textBtn} = props;

  return (
    <View className="m-3 flex-row items-center justify-between">
      <View className="flex-row items-center">
        <Image source={icon} />
        <Text className="ml-3 font-bold text-lg">{title}</Text>
      </View>

      {textBtn !== '' && (
        <TouchableOpacity className="rounded-lg py-1 px-3">
          <Text className="text-orange-400">{textBtn}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HomeTitle;
