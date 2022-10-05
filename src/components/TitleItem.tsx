import {Text, View} from 'react-native';

interface Props {
  title: string;
  marginTop?: string;
}

const TitleItem: React.FC<Props> = (props: Props) => {
  const {title, marginTop} = props;

  return (
    <View className={`bg-gray-100 py-2 px-5 ${marginTop}`}>
      <Text className="text-black font-bold">{title}</Text>
    </View>
  );
};

export default TitleItem;
