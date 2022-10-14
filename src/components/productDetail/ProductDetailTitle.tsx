import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, View} from 'react-native';

interface Props {
  icon: IconProp;
  title: string;
}

const ProductDetailTitle: React.FC<Props> = (props: Props) => {
  const {icon, title} = props;

  return (
    <View className="flex-row items-center m-5">
      <FontAwesomeIcon icon={icon} color="#FD7D00" size={25} />
      <Text className="text-orange-400 font-bold text-xl ml-2">{title}</Text>
    </View>
  );
};

export default ProductDetailTitle;
