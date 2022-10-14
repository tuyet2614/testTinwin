import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text: string;
  textBtnRight?: string;
  isGoback?: boolean;
  onPress?: () => void;
}

const HeaderStack: React.FC<Props> = (props: Props) => {
  const {text, textBtnRight, isGoback, onPress} = props;

  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-row p-5 items-center justify-between">
      {isGoback ? (
        <TouchableOpacity onPress={goBack}>
          <FontAwesomeIcon icon={faAngleLeft} size={25} />
        </TouchableOpacity>
      ) : (
        <View className="w-8"></View>
      )}
      <Text className="text-xl font-bold text-black">{text}</Text>

      {textBtnRight !== undefined ? (
        <TouchableOpacity onPress={onPress}>
          <Text className="text-orange-400">{textBtnRight}</Text>
        </TouchableOpacity>
      ) : (
        <View className="w-8"></View>
      )}
    </View>
  );
};

export default HeaderStack;
