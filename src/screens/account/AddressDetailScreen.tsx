import {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import AddressDetailItem from '../../components/address/AddressDetailItem';
import BtnPrimary from '../../components/BtnPrimary';
import HeaderStack from '../../components/HeaderStack';
import InputItem from '../../components/InputItem';

const AddressDetailScreen: React.FC = () => {
  const [province, setProvince] = useState<object>({});
  const [district, setDistrict] = useState<object>({});
  const [ward, setWard] = useState<object>({});

  return (
    <SafeAreaView className="bg-white flex-1">
      <HeaderStack text="Địa chỉ" isGoback={true} />
      <ScrollView className="flex-1">
        <AddressDetailItem
          onPress={() => setProvince({})}
          setValue={setProvince}
          title="Tỉnh / thành phố"
          value={province}
          item={{}}
        />
        {Object.keys(province).length !== 0 && (
          <AddressDetailItem
            onPress={() => setDistrict({})}
            setValue={setDistrict}
            title="Quận / huyện"
            value={district}
            item={province}
          />
        )}
        {Object.keys(district).length !== 0 && (
          <AddressDetailItem
            onPress={() => setWard({})}
            setValue={setWard}
            title="Phường / xã"
            value={ward}
            item={district}
          />
        )}
      </ScrollView>

      <View className="m-5">
        <InputItem
          placeholder="Nhập tên đường, tòa nhà, số nhà..."
          title="Địa chỉ cụ thể"
          style="mb-3"
        />
        <BtnPrimary text="Xác nhận địa chỉ" style="p-4 items-center" />
      </View>
    </SafeAreaView>
  );
};

export default AddressDetailScreen;
