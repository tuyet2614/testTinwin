import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CheckBoxItem from './CheckBoxItem';
import InputItem from './InputItem';

interface Props {
  onPress?: () => void;
  title: string;
  showFilter: boolean;
}

const FilterContainer: React.FC<Props> = (props: Props) => {
  const {onPress, title, showFilter} = props;

  const [value, setValue] = useState<string>('');
  const clearSearchText = () => {
    setValue('');
  };

  return (
    <View>
      <Text className="text-black font-bold my-5">{title}</Text>

      <TouchableOpacity
        onPress={onPress}
        className="flex-row items-center border border-gray-200 p-3 rounded-lg justify-between">
        <Text>Vui lòng chọn</Text>
        <FontAwesomeIcon icon={faAngleDown} />
      </TouchableOpacity>

      {showFilter && (
        <View className="p-2 border border-gray-200 rounded-lg mt-2">
          <View className="flex-row items-center">
            <InputItem
              placeholder="Nhập từ khoá tìm kiếm"
              style="flex-1"
              value={value}
              setValue={setValue}
            />
            <TouchableOpacity className="mx-3" onPress={clearSearchText}>
              <Text className="text-orange-400 text-lg">Xoá</Text>
            </TouchableOpacity>
          </View>
          <CheckBoxItem text="Sữa trẻ em" />
        </View>
      )}
    </View>
  );
};

export default FilterContainer;
