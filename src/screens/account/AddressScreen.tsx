import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View} from 'react-native';
import AddressContainer from '../../components/address/AddressContainer';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';
import useGetAddress from '../../hooks/address/useGetAddress';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';

export const dataAddress: object[] = [
  {
    id: 1,
    name: 'Long',
    phone: '012346789',
    address: 'ABC',
  },
  {
    id: 2,
    name: 'Tuyết',
    phone: '012346789',
    address: 'DEF',
  },
  {
    id: 3,
    name: 'Thái',
    phone: '012346789',
    address: 'XYZ',
  },
];

const AddressScreen: React.FC = () => {
  const navigation = useNavigation();
  const fn = useGetAddress();
  fn();
  // console.log(dataAddress);

  const onPress = () => {
    navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
      title: 'Địa chỉ giao hàng',
    });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Địa chỉ giao hàng" isGoback={true} />

      <AddressContainer
        data={dataAddress}
        icon={require('../../assets/icons/account/location.png')}
      />

      <View className="m-3">
        <BtnPrimary
          text="Thêm địa chỉ mới"
          style="items-center p-3"
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddressScreen;
