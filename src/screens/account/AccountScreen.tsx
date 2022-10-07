import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AccountContainer from '../../components/account/AccountContainer';
import AccountHeader from '../../components/account/AccountHeader';
import AccountInfo from '../../components/account/AccountInfo';
import {
  NAVIGATE_ADDRESS,
  NAVIGATE_ORDER,
  NAVIGATE_SOCIAL_NETWORK,
} from '../../navigation/navigate';

const AccountScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full">
      <AccountHeader />

      <AccountInfo />

      <AccountContainer
        title="Đơn mua"
        items={[
          {
            icon: require('../../assets/icons/account/basket-search2.png'),
            text: 'Lịch sử mua hàng',
            onPress: () => navigation.navigate(NAVIGATE_ORDER),
          },
        ]}
      />
      <AccountContainer
        title="Tài khoản"
        items={[
          {
            icon: require('../../assets/icons/account/a-search1.png'),
            text: 'Tài khoản Mạng xã hội',
            onPress: () => navigation.navigate(NAVIGATE_SOCIAL_NETWORK),
          },
          {
            icon: require('../../assets/icons/account/Card.png'),
            text: 'Tài khoản/Thẻ ngân hàng',
          },
          {
            icon: require('../../assets/icons/account/location.png'),
            text: 'Địa chỉ giao hàng',
            onPress: () => navigation.navigate(NAVIGATE_ADDRESS),
          },
        ]}
      />

      <View className="flex-row p-5 justify-between">
        <Text className="text-black">Đăng xuất</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/account/logout.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
