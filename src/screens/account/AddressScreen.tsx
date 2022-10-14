import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, View} from 'react-native';
import AddressContainer from '../../components/address/AddressContainer';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';
import useGetAddress from '../../hooks/address/useGetAddress';
import {NAVIGATE_ADD_NEW_ADDRESS} from '../../navigation/navigate';

const AddressScreen: React.FC = () => {
  const navigation = useNavigation();
  const addresses = useGetAddress();

  const onPress = () => {
    navigation.navigate(NAVIGATE_ADD_NEW_ADDRESS, {
      title: 'Địa chỉ giao hàng',
    });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Địa chỉ giao hàng" isGoback={true} />

      <AddressContainer
        data={addresses}
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
