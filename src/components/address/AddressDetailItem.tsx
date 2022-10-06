import {useState} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import useGetDistricts from '../../hooks/shipping/useGetDistricts';
import useGetProvinces from '../../hooks/shipping/useGetProvinces';
import useGetWards from '../../hooks/shipping/useGetWards';
import TitleItem from '../TitleItem';

interface Props {
  title: string;
  value?: object;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  item: object;
  onPress: () => void;
}

const AddressDetailItem: React.FC<Props> = (props: Props) => {
  const {title, value, setValue, item, onPress} = props;

  const onChoose = (item: string) => {
    setValue(item);
  };

  console.log(item);

  const data =
    Object.keys(item).length === 0
      ? useGetProvinces()
      : item.type === 'PROVINCE'
      ? useGetDistricts(item.id)
      : useGetWards(item.id);

  const renderItem = ({item, index}) => (
    <View>
      <TouchableOpacity className="p-5 flex-row" onPress={() => onChoose(item)}>
        {index !== 0 ? (
          data[index - 1].name[0] !== item.name[0] ? (
            <Text>{item.name[0]}</Text>
          ) : (
            <View className="w-2" />
          )
        ) : (
          <Text>{item.name[0]}</Text>
        )}
        <Text className="text-black ml-5">{item.name}</Text>
      </TouchableOpacity>
      <View className="h-0.5 bg-gray-200" />
    </View>
  );

  return (
    <View>
      <TitleItem title={title} />
      <TouchableOpacity className="p-5" onPress={onPress}>
        <Text className="text-orange-primary">{value.name}</Text>
      </TouchableOpacity>
      <View>
        {Object.keys(value).length === 0 && (
          <FlatList
            data={data}
            keyExtractor={key => key.id}
            renderItem={renderItem}
          />
        )}
      </View>
    </View>
  );
};

export default AddressDetailItem;
