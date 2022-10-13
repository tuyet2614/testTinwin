import { faBuilding, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
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
// import TitleItem from '../../components/TitleItem';
import useChoose from '../../hooks/useChoose';

const AddNewAddressScreen: React.FC = () => {
  const route = useRoute();
  const { title, item } = route.params;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (item !== undefined) {
      setName(item.name);
      setPhone(item.phone);
      setAddress(item.address);
    }
  }, []);

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

  const { isChoose, choose } = useChoose(addressTypes);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => isChoose(item)}
      className={`flex-row items-center border-2 border-${choose(item) ? 'orange-primary' : 'gray-100'
        } flex-1 py-2 px-5 rounded-lg ${choose(item) && 'bg-orange-100'}`}>
      <FontAwesomeIcon icon={item.icon} color={colors.primary} />
      <Text className="ml-2 text-lg">{item.text}</Text>
    </TouchableOpacity>
  );

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
          <AccountItem text={item !== undefined ? address : 'Chọn địa chỉ'} />

          <CheckBoxItem text="Đặt làm địa chỉ mặc định" style="ml-2" />
        </View>

        <View className="bg-gray-100 py-2 px-5 mt-10">
          <Text className="text-black font-bold">Loại địa chỉ</Text>
        </View>
        <FlatList
          contentContainerStyle={tw`flex-row justify-evenly mt-5`}
          data={addressTypes}
          keyExtractor={key => key.id}
          renderItem={renderItem}
        />
      </ScrollView>

      {item !== undefined && (
        <BtnBorder text="Xoá địa chỉ" style="p-3 mx-3 items-center" />
      )}
      <View className="m-3">
        <BtnPrimary text="Hoàn thành" style="items-center m-3" />
      </View>
    </SafeAreaView>
  );
};

export default AddNewAddressScreen;
