import {faBuilding, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { colors } from '../../assets/colors';
import AccountItem from '../../components/account/AccountItem';
import BtnBorder from '../../components/BtnBorder';
import BtnPrimary from '../../components/BtnPrimary';
import CheckBoxItem from '../../components/CheckBoxItem';
import HeaderStack from '../../components/HeaderStack';
import InputItem from '../../components/InputItem';
import TitleItem from '../../components/TitleItem';
import useAddNewAddress from '../../hooks/address/useAddNewAddress';
import useDeleteAddress from '../../hooks/address/useDeleteAddress';
import useUpdateAddress from '../../hooks/address/useUpdateAddress';
import useChoose from '../../hooks/useChoose';
import {NAVIGATE_ADDRESS_DETAIL} from '../../navigation/navigate';

const AddNewAddressScreen: React.FC = () => {
  const route = useRoute();
  const {title, item} = route.params;

  const updateAddress = useUpdateAddress();
  const addNewAddress = useAddNewAddress();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('Chọn địa chỉ');
  const [provinceId, setProvinceId] = useState('');
  const [districtId, setDistrictId] = useState('');
  const [wardId, setWardId] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const [newAddress, setNewAddress] = useState({});

  useEffect(() => {
    if (item !== undefined) {
      setName(item.name);
      setPhone(item.phoneNumber);
      setAddress(item.specificAddress);
      setIsCheck(item.isDefault);
      setProvinceId(item.provinceId);
      setDistrictId(item.districtId);
      setWardId(item.wardId);
    }
  }, []);

  useEffect(() => {
    Object.keys(newAddress).length > 0 &&
      setAddress(
        newAddress.specificAddress +
          ', ' +
          newAddress.ward.name +
          ', ' +
          newAddress.district.name +
          ', ' +
          newAddress.province.name,
      );
  }, [newAddress]);

  const addressTypes: object[] = [
    {
      id: 1,
      text: 'Nhà riêng',
      icon: faHome,
    },
    {
      id: 2,
      text: 'Văn phòng',
      icon: faBuilding,
    },
  ];

  const {isChoose, choose, itemIsChoose} = useChoose(addressTypes);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => isChoose(item)}
      className={`flex-row items-center border-2 border-${
        choose(item) ? 'orange-400' : 'gray-100'
      } flex-1 py-2 px-5 rounded-lg ${choose(item) && 'bg-orange-100'}`}>
      <FontAwesomeIcon icon={item.icon} color={colors.primary} />
      <Text className="ml-2 text-lg">{item.text}</Text>
    </TouchableOpacity>
  );

  const navigation = useNavigation();
  const onChooseAddress = () => {
    navigation.navigate(NAVIGATE_ADDRESS_DETAIL, {
      setNewAddress: setNewAddress,
    });
  };

  const deleteAddress = useDeleteAddress();
  const onDelete = () => {
    deleteAddress(item.id);
    navigation.goBack();
  };

  const onConfirm = () => {
    const data = {
      name: name,
      phoneNumber: phone,
      specificAddress: address,
      isDefault: isCheck,
      shippingAddressType: itemIsChoose.id,
      provinceId:
        Object.keys(newAddress).length > 0
          ? newAddress.province.id
          : provinceId,
      districtId:
        Object.keys(newAddress).length > 0
          ? newAddress.district.id
          : districtId,
      wardId: Object.keys(newAddress).length > 0 ? newAddress.ward.id : wardId,
    };

    item !== undefined ? updateAddress(item.id, data) : addNewAddress(data);
    navigation.goBack();
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text={title} isGoback={true} />

      <ScrollView className="mb-3">
        <TitleItem title="Liên hệ" />

        <View className="mx-5">
          <InputItem
            setValue={setName}
            value={name}
            style="mt-5"
            placeholder="Nhập họ và tên người nhận"
            title="Tên người nhận"
          />
          <InputItem
            setValue={setPhone}
            value={phone}
            style="mt-5"
            placeholder="Nhập số điện thoại nhận hàng"
            title="Số điện thoại"
          />
        </View>

        <TitleItem title="Địa chỉ" marginTop="mt-10" />
        <View className="">
          <Text className="my-2 mt-5 mx-4">
            Địa chỉ cụ thể
            <Text className="text-red-danger">*</Text>
          </Text>
          <AccountItem text={address} onPress={onChooseAddress} />

          <CheckBoxItem
            text="Đặt làm địa chỉ mặc định"
            style="ml-2"
            setIsCheck={setIsCheck}
            isCheck={isCheck}
          />
        </View>

        <TitleItem title="Loại địa chỉ" marginTop="mt-10" />
        <FlatList
          contentContainerStyle={tw`flex-row justify-evenly mt-5`}
          data={addressTypes}
          keyExtractor={key => key.id}
          renderItem={renderItem}
        />
      </ScrollView>

      {item !== undefined && (
        <BtnBorder
          text="Xoá địa chỉ"
          style="p-3 mx-3 items-center"
          onPress={onDelete}
        />
      )}
      <View className="m-3">
        <BtnPrimary
          text="Hoàn thành"
          style="items-center m-3"
          onPress={onConfirm}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddNewAddressScreen;
