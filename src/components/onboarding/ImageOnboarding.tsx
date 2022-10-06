import {Image, View} from 'react-native';
import {
  LOGO_TINWIN_PRIMARY,
  onboarding1,
  onboarding2,
  onboarding3,
} from '../../assets/images';

interface Props {
  image: string;
}

const ImageOnboarding: React.FC<Props> = (props: Props) => {
  const {image} = props;

  return (
    <View className="h-80 items-center justify-between">
      <Image source={LOGO_TINWIN_PRIMARY} className="w-18 h-14" />
      <Image
        source={
          image === '1'
            ? onboarding1
            : image === '2'
            ? onboarding2
            : onboarding3
        }
        className="h-44 w-44"
      />
    </View>
  );
};

export default ImageOnboarding;
