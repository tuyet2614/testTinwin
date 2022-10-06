import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useGetDistricts from '../../hooks/shipping/useGetDistricts';
import useGetProvinces from '../../hooks/shipping/useGetProvinces';
import TitleItem from '../TitleItem';
import AddressModal from './AddressModal';

interface Props {
  title: string;
  value?: object;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  item: object;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
}

const AddressDetailItem: React.FC<Props> = (props: Props) => {
  const {title, value, setValue, item, setModalVisible} = props;

  const onChoose = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <TitleItem title={title} />
      <TouchableOpacity onPress={onChoose}>
        <Text>{Object.keys(value).length !== 0 ? value.name : title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressDetailItem;
