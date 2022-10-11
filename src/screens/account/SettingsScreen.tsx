import {faSignOut} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import AccountContainer from '../../components/account/AccountContainer';
import HeaderStack from '../../components/HeaderStack';
import {
  NAVIGATE_ADDRESS,
  NAVIGATE_CHANGE_INFO,
} from '../../navigation/navigate';

const SettingsScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack text="Cài đặt" isGoback={true} />

      <AccountContainer
        title="Tài khoản"
        items={[
          {
            text: 'Sửa hồ sơ',
            onPress: () => navigation.navigate(NAVIGATE_CHANGE_INFO),
          },
          {
            text: 'Địa chỉ giao hàng',
            onPress: () => navigation.navigate(NAVIGATE_ADDRESS),
          },
        ]}
      />

      <AccountContainer title="Ứng dụng" items={[{text: 'Ngôn ngữ'}]} />

      <AccountContainer
        title="Điều khoản Tinwin"
        items={[
          {text: 'Điều khoản dịch vụ'},
          {text: 'Chính sách bảo mật'},
          {text: 'Chính sách vận chuyển'},
          {text: 'Chính sách trả hàng / hoàn tiền'},
        ]}
      />

      <TouchableOpacity className="flex-row items-center justify-between p-4">
        <Text className="text-red-danger">Đăng xuất</Text>
        <FontAwesomeIcon icon={faSignOut} size={25} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;
