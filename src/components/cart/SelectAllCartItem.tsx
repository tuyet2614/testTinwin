import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckBoxItem from '../CheckBoxItem';

interface Props {
  icon?: IconProp;
  title: string;
  iconRight: IconProp;
  onPress?: () => void;
  setIsCheck: React.Dispatch<React.SetStateAction<any>>;
  isCheck: boolean;
}

const SelectAllCartItem: React.FC<Props> = (props: Props) => {
  const {icon, title, iconRight, onPress, isCheck, setIsCheck} = props;

  return (
    <View className="flex-row items-center justify-between p-3 px-5">
      <View className="flex-row items-center">
        <CheckBoxItem
          text={title}
          icon={icon}
          isCheck={isCheck}
          setIsCheck={setIsCheck}
        />
      </View>
      <TouchableOpacity onPress={onPress}>
        <FontAwesomeIcon icon={iconRight} />
      </TouchableOpacity>
    </View>
  );
};

export default SelectAllCartItem;
