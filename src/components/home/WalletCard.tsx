import {
  faArrowAltCircleRight,
  faEyeSlash,
} from '@fortawesome/free-regular-svg-icons';
import {faClockRotateLeft, faRefresh} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../assets/colors';
import useConvertToVND from '../../hooks/useConvertToVND';
import useGetWallet from '../../hooks/wallet/useGetWallet';

const WalletCard: React.FC = () => {
  const {wallet, userInfo} = useGetWallet();
  const [showPrice, setShowPrice] = useState<boolean>(false);

  const onPressEye = () => {
    setShowPrice(!showPrice);
  };

  const avatar = {
    uri: userInfo.picture,
  };

  return (
    <LinearGradient
      className={`rounded-lg p-3 mx-3 mb-3`}
      colors={[colors.primary, colors.primaryToGradient, colors.primary]}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 0.5, 1]}>
      <View className="flex-row">
        <Image className="h-8 w-8 rounded-full mr-3" source={avatar} />
        <View>
          <Text className="text-white font-bold">{userInfo.name}</Text>
          <Text className="text-white text-xs">Khách hàng</Text>
        </View>
      </View>

      <View className="flex-row items-center mt-3">
        <Text className="text-white">Số dư ví</Text>
        <TouchableOpacity className="px-3" onPress={onPressEye}>
          <FontAwesomeIcon icon={faEyeSlash} color="white" />
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center">
        {showPrice && wallet !== undefined ? (
          <Text className="text-white text-3xl font-bold">
            {useConvertToVND(wallet.balance)}
          </Text>
        ) : (
          <Text className="text-white text-3xl font-bold">******</Text>
        )}
        <TouchableOpacity className="ml-3">
          <FontAwesomeIcon icon={faRefresh} color={`${colors.white}`} />
        </TouchableOpacity>
      </View>
      <View className="h-px bg-gray-100 my-3"></View>
      <View className="flex-row justify-between">
        <TouchableOpacity className="flex-row items-center">
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            color={`${colors.white}`}
          />
          <Text className="text-white ml-3">Nạp tiền</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <FontAwesomeIcon icon={faClockRotateLeft} color={`${colors.white}`} />
          <Text className="text-white ml-3">Lịch sử giao dịch</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default WalletCard;
