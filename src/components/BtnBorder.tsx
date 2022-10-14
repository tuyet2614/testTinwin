import {Text, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  style: string;
  onPress?: () => void;
}

const BtnBorder: React.FC<Props> = (props: Props) => {
  const {text, style, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border-orange-400 border-2 ${style} rounded-md`}>
      <Text className={`text-orange-400`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default BtnBorder;
