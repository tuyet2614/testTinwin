import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {colors} from '../assets/colors';

interface Props {
  style?: string;
}

const Loading: React.FC<Props> = (props: Props) => {
  const {style} = props;

  return (
    <View className={`flex-1 items-center justify-center ${style}`}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;
