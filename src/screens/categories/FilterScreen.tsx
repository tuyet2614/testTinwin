import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import RnRangeSlider from 'rn-range-slider';
import BtnBorder from '../../components/BtnBorder';
import BtnPrimary from '../../components/BtnPrimary';
import CloseBtn from '../../components/buttons/CloseBtn';
import FilterContainer from '../../components/FilterContainer';
import InputItem from '../../components/InputItem';
import useConvertToVND from '../../hooks/useConvertToVND';

const FilterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [showCategoriesFilter, setShowCategoriesFilter] =
    useState<boolean>(false);
  const [showSupplierFilter, setShowSupplierFilter] = useState<boolean>(false);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(5000000);

  const onCategoriesFilter = () => {
    setShowCategoriesFilter(!showCategoriesFilter);
  };

  const onSupplierFilter = () => {
    setShowSupplierFilter(!showSupplierFilter);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const renderThumb = () => (
    <View className="w-4 h-4 rounded-full bg-orange-400" />
  );
  const renderRail = () => (
    <View className="h-0.5 flex-1 rounded-lg bg-gray-400" />
  );
  const renderRailSelected = () => (
    <View className="h-0.5 flex-1 rounded-lg bg-orange-400" />
  );
  const renderView = () => <View />;
  const onValueChanged = (low, high, fromUser) => {
    setMinPrice(low);
    setMaxPrice(high);
  };

  return (
    <SafeAreaView>
      <View className="bg-white p-3 flex-1 h-full">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-bold text-black">Bộ lọc tìm kiếm</Text>
          <CloseBtn onPress={goBack} />
        </View>

        <ScrollView className="flex-1">
          <FilterContainer
            onPress={onCategoriesFilter}
            title="Theo danh mục"
            showFilter={showCategoriesFilter}
          />

          <FilterContainer
            onPress={onSupplierFilter}
            title="Theo nhà cung cấp"
            showFilter={showSupplierFilter}
          />

          <View className="h-full">
            <Text className="text-black font-bold my-5">Giới hạn giá</Text>
            <View className="flex-row items-center w-full">
              <InputItem
                setValue={setMinPrice}
                value={useConvertToVND(minPrice)}
                placeholder="Tối thiểu"
                style="flex-1"
                keyboardType="number-pad"
              />
              <Text className="mx-3">-</Text>
              <InputItem
                setValue={setMaxPrice}
                value={useConvertToVND(maxPrice)}
                placeholder="Tối đa"
                style="flex-1"
                keyboardType="number-pad"
              />
            </View>
            <RnRangeSlider
              className="py-5 z-20"
              min={0}
              max={5000000}
              step={20000}
              onValueChanged={onValueChanged}
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderView}
              renderNotch={renderView}
            />
            <View className="flex-row justify-between">
              <Text>{useConvertToVND(minPrice)}</Text>
              <Text>{useConvertToVND(maxPrice)}</Text>
            </View>
          </View>
        </ScrollView>
        <View className="flex-row">
          <BtnBorder
            text="Thiết lập lại"
            style="p-3 flex-1 items-center mr-3"
          />
          <BtnPrimary
            text="Áp dụng"
            style="justify-center px-16 items-center flex-1"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterScreen;
