import {faClose, faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../assets/colors';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';

interface Props {
  name: string;
  phone: string;
  address: string;
  id: number;
  onPress?: () => void;
  icon?: ImageSourcePropType;
}

const AddressItem: React.FC<Props> = (props: Props) => {
  const {name, phone, address, onPress, icon, id} = props;
  const [optionsVisible, setOptionsVisible] = useState(false);

  const navigation = useNavigation();

  const hideOptions = () => {
    setOptionsVisible(false);
  };

  const changeAddress = () => {
    navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
      title: 'Sửa địa chỉ',
      item: {
        name: name,
        phone: phone,
        address: address,
      },
    });
  };

  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        className="flex-row p-5 justify-between relative">
        <View className="flex-row">
          {icon !== undefined ? (
            <Image source={icon} className="m-3 h-6 w-6" />
          ) : (
            <View className="h-3">
              <RadioButton.Android value={id} color={colors.primary} />
            </View>
          )}
          <View>
            <Text className="font-bold text-xl text-black">{name}</Text>
            <Text>{phone}</Text>
            <Text>{address}</Text>
          </View>
        </View>

        {icon !== undefined && (
          <TouchableOpacity onPress={() => setOptionsVisible(!optionsVisible)}>
            <FontAwesomeIcon icon={faEllipsisVertical} size={25} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>

      <View className="h-1.5 bg-gray-100"></View>

      {optionsVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={optionsVisible}>
          <TouchableOpacity
            className="bg-black-opacity h-full"
            onPress={hideOptions}
          />
          <View
            className="bg-white w-full rounded-lg absolute self-center bottom-0 justify-evenly"
            style={{elevation: 10}}>
            <View className="flex-row items-center justify-between px-3 py-5">
              <Text className="text-xl text-black">Tuỳ chọn</Text>
              <TouchableOpacity onPress={hideOptions}>
                <FontAwesomeIcon icon={faClose} size={20} />
              </TouchableOpacity>
            </View>
            <View className="h-0.5 bg-gray-200 mb-2"></View>
            <View className="m-3 h-3/4 justify-evenly">
              <TouchableOpacity className="p-3 border-orange-primary border-2 rounded-lg">
                <Text className="text-orange-primary">Đặt làm mặc định</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-3 border-orange-primary border-2 rounded-lg"
                onPress={changeAddress}>
                <Text className="text-orange-primary">Chỉnh sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-3 border-orange-primary border-2 rounded-lg">
                <Text className="text-orange-primary">Xoá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default AddressItem;
