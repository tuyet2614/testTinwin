import {faPen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useGetUser from '../../hooks/user/useGetUser';
import {NAVIGATE_CHANGE_INFO} from '../../navigation/navigate';

const AccountInfo: React.FC = () => {
  const navigation = useNavigation();

  const userInfo = useGetUser();

  const navigateChangeInfo = () => {
    navigation.navigate(NAVIGATE_CHANGE_INFO);
  };

  return (
    userInfo !== undefined && (
      <View className="flex-row p-5">
        <TouchableOpacity
          className="relative mr-5 h-16"
          onPress={navigateChangeInfo}>
          <Image
            className="h-16 w-16 rounded-full"
            source={{uri: userInfo.picture}}
          />

          <View
            className={`absolute bg-orange-400 h-6 w-6 bottom-0 right-0 rounded-full items-center justify-center`}>
            <FontAwesomeIcon icon={faPen} color="white" size={10} />
          </View>
        </TouchableOpacity>
        <View className="">
          <Text className="uppercase text-black font-bold">
            {userInfo.name}
          </Text>
          <View className={`bg-orange-400 w-24 items-center p-1 rounded-full`}>
            <Text className="text-white text-xs">Khách hàng</Text>
          </View>
          <Text className="py-2">{userInfo.phoneNumber}</Text>

          <TouchableOpacity>
            <Text className="text-blue-600 text-xs pb-2">{userInfo.email}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default AccountInfo;
