import {Image, Text, View} from 'react-native';
import {LOGO_TINWIN_PRIMARY} from '../../assets/images';

const HeaderHome: React.FC = () => {
  return (
    <View className="flex-row items-center justify-between m-3">
      <Image source={LOGO_TINWIN_PRIMARY} className="h-12 w-16" />
      <Text className="text-orange-400 text-xl font-bold">
        Chúc bạn ngày mới vui vẻ!
      </Text>
    </View>
  );
};

export default HeaderHome;
