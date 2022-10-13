import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATE_SEARCH_SCREEN } from '../../navigation/navigate';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  placeholder?: string;
  style?: string
  color?: string
}

const SearchBtnHome: React.FC<Props> = (props: Props) => {
  const { placeholder, style, color } = props;
  const navigation = useNavigation()
  const onPressRouteSearch = () => {
    navigation.navigate(NAVIGATE_SEARCH_SCREEN)
  }

  return (
    <TouchableOpacity
      className="flex-row flex-1 border border-gray-200 rounded-lg p-3 items-center"
      onPress={onPressRouteSearch}>
      <FontAwesomeIcon icon={faSearch} color={color} />
      <Text className={style}>{placeholder ? placeholder : 'Nhập từ khoá tìm kiếm'}</Text>
    </TouchableOpacity>
  );
};

export default SearchBtnHome;
