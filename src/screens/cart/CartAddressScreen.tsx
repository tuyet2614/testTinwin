import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import AddressContainer from '../../components/address/AddressContainer';
import BtnBorder from '../../components/BtnBorder';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';
import useGetAddress from '../../hooks/address/useGetAddress';
import useDefaultAddress from '../../hooks/useDefaultAddress';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';

const CartAddressScreen: React.FC = () => {
  const navigation = useNavigation();
  const {dispatchDefaultAddress, defaultAddress} = useDefaultAddress();
  const addresses = useGetAddress();
  const [value, setValue] = useState(defaultAddress.id);

  const navigateAddNewAddress = () => {
    navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
      title: 'Địa chỉ giao hàng',
    });
  };

  const onConfirm = () => {
    dispatchDefaultAddress(addresses.find((item: object) => item.id === value));
    navigation.goBack();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderStack text="Địa chỉ nhận hàng" isGoback={true} />
      <ScrollView>
        <RadioButton.Group
          onValueChange={newValue => setValue(newValue)}
          value={value}>
          <AddressContainer data={addresses} setValue={setValue} />
        </RadioButton.Group>
      </ScrollView>
      <View className="m-3">
        <BtnPrimary
          text="Xác nhận"
          style="p-3 items-center"
          onPress={onConfirm}
        />
        <BtnBorder
          text="Thêm địa chỉ mới"
          style="p-3 items-center mt-3"
          onPress={navigateAddNewAddress}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartAddressScreen;
