import {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AddressDetailItem from '../../components/address/AddressDetailItem';
import AddressModal from '../../components/address/AddressModal';
import HeaderStack from '../../components/HeaderStack';

const AddressDetailScreen: React.FC = () => {
  const [province, setProvince] = useState<object>({});
  const [district, setDistrict] = useState<object>({});
  const [ward, setWard] = useState<object>({});

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaView className="bg-white flex-1">
      <HeaderStack text="Địa chỉ" isGoback={true} />
      <AddressDetailItem
        setModalVisible={setModalVisible}
        setValue={setProvince}
        title="Tỉnh / thành phố"
        value={province}
        item={{}}
      />
      <AddressDetailItem
        setModalVisible={setModalVisible}
        setValue={setDistrict}
        title="Quận / huyện"
        value={district}
        item={province}
      />
      <AddressDetailItem
        setModalVisible={setModalVisible}
        setValue={setWard}
        title="Phường / xã"
        value={ward}
        item={district}
      />

      <AddressModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setValue={
          Object.keys(province).length === 0
            ? setProvince
            : Object.keys(district).length === 0
            ? setDistrict
            : setWard
        }
        item={
          Object.keys(province).length === 0
            ? province
            : Object.keys(district).length === 0
            ? province
            : district
        }
      />
    </SafeAreaView>
  );
};

export default AddressDetailScreen;
