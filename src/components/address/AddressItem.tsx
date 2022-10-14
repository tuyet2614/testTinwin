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
import useDeleteAddress from '../../hooks/address/useDeleteAddress';
import useSetDefault from '../../hooks/address/useSetDefault';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';

interface Props {
  item: object;
  onPress?: () => void;
  icon?: ImageSourcePropType;
}

const AddressItem: React.FC<Props> = (props: Props) => {
  const {item, onPress, icon} = props;
  const {
    name,
    phoneNumber,
    specificAddress,
    shippingAddressType,
    isDefault,
    id,
  } = item;
  const [optionsVisible, setOptionsVisible] = useState(false);

  const navigation = useNavigation();

  const hideOptions = () => {
    setOptionsVisible(false);
  };

  const changeAddress = () => {
    navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
      title: 'Sửa địa chỉ',
      item: item,
    });
  };

  const setDefault = useSetDefault();
  const deleteAddress = useDeleteAddress();
  const onDelete = () => {
    deleteAddress(id);
  };
  const onSetDefault = () => {
    setDefault(id);
    setOptionsVisible(false);
  };

  const type =
    shippingAddressType === 2 ? 'Địa chỉ văn phòng' : 'Địa chỉ nhà riêng';

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
            <Text className="my-2">{phoneNumber}</Text>
            <Text className="w-64 text-xs" numberOfLines={2}>
              {specificAddress}
            </Text>
            <View className="flex-row justify-between my-2">
              <Text
                className={`text-${
                  shippingAddressType === 2 ? 'orange-400' : 'blue-400'
                }`}>
                {type}
              </Text>
              {isDefault && <Text className="text-green-400">Mặc định</Text>}
            </View>
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
              <TouchableOpacity
                className="p-3 border-orange-400 border-2 rounded-lg"
                onPress={onSetDefault}>
                <Text className="text-orange-400">Đặt làm mặc định</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-3 border-orange-400 border-2 rounded-lg"
                onPress={changeAddress}>
                <Text className="text-orange-400">Chỉnh sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-3 border-orange-400 border-2 rounded-lg"
                onPress={onDelete}>
                <Text className="text-orange-400">Xoá</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default AddressItem;
