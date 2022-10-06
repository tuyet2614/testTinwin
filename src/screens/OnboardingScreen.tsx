import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, View, Text, Alert} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import BtnBorder from '../components/BtnBorder';
import BtnIcon from '../components/BtnIcon';
import ImageOnboarding from '../components/onboarding/ImageOnboarding';
import SubTitleOnboarding from '../components/onboarding/SubTitleOnboarding';
import TitleOnboarding from '../components/onboarding/TitleOnboarding';
import {NAVIGATE_HOME, NAVIGATE_LOGIN} from '../navigation/navigate';

const pages: object[] = [
  {
    backgroundColor: '#fff',
    image: <ImageOnboarding image="1" />,
    title: <TitleOnboarding title="Niềm tin tạo nên sức mạnh" />,
    subtitle: (
      <SubTitleOnboarding text="Nền tảng kết nối khách hàng đến nhà bán hàng uy tín" />
    ),
  },
  {
    backgroundColor: '#fff',
    image: <ImageOnboarding image="2" />,
    title: <TitleOnboarding title="Bảo vệ người tiêu dùng" />,
    subtitle: (
      <SubTitleOnboarding text="Tất cả người tiêu dùng không phân biệt tầng lớp giai cấp đều được bảo vệ và hỗ trợ, khi mua sản phẩm qua app" />
    ),
  },
  {
    backgroundColor: '#fff',
    image: <ImageOnboarding image="3" />,
    title: <TitleOnboarding title="Kết nối từ yêu thương" />,
    subtitle: (
      <SubTitleOnboarding text="Tinwin luôn yêu thương và bảo vệ khách hàng như người thân của mình" />
    ),
  },
];

const Square: React.FC = ({isLight, selected}) => {
  return (
    <View
      className={`rounded-full w-2 h-2 mx-1 ${
        selected ? 'bg-orange-400' : 'bg-gray-200'
      }`}
    />
  );
};

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(NAVIGATE_LOGIN);
  };

  const NextButtonComponent = ({isLight, ...props}) => (
    <View className="mr-8">
      <BtnIcon icon={faArrowRight} style="p-3" prop={{...props}} />
    </View>
  );

  const SkipButtonComponent = () => (
    <BtnBorder text="Bỏ qua" style="ml-8 px-3 py-2" onPress={onPress} />
  );

  const DoneButtonComponent = () => (
    <View className="mr-8">
      <BtnIcon icon={faArrowRight} style="p-3" onPress={onPress} />
    </View>
  );

  return (
    <Onboarding
      // containerStyles={{
      //   backgroundColor: 'blue',
      // }}
      // subTitleStyles={{backgroundColor: 'green'}}
      // imageContainerStyles={{backgroundColor: 'red'}}
      bottomBarHeight={100}
      bottomBarColor="white"
      DotComponent={Square}
      pages={pages}
      NextButtonComponent={NextButtonComponent}
      SkipButtonComponent={SkipButtonComponent}
      DoneButtonComponent={DoneButtonComponent}
    />
  );
};

export default OnboardingScreen;
