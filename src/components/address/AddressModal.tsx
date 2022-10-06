import {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useGetDistricts from '../../hooks/shipping/useGetDistricts';
import useGetProvinces from '../../hooks/shipping/useGetProvinces';
import CloseBtn from '../buttons/CloseBtn';

interface Props {
  item?: object;
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
}

const AddressModal: React.FC<Props> = (props: Props) => {
  const {item, modalVisible, setModalVisible, setValue} = props;

  const data =
    Object.keys(item).length === 0
      ? useGetProvinces()
      : useGetDistricts(item.id);
  //   const [data, setData] = useState(arr);

  //   useEffect(() => {
  //     setData(arr);
  //   }, [item]);

  console.log(data);

  const onChoose = (item: string) => {
    setValue(item);
    // setIsChange(true);
  };

  const onClose = () => {
    setModalVisible(false);
  };

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
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <SafeAreaView className="bg-white flex-1">
        <CloseBtn onPress={onClose} />
        <FlatList
          data={data}
          keyExtractor={key => key.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default AddressModal;
