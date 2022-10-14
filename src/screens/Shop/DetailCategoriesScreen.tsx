import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Animated,
  FlatList,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import FilterBtn from '../../components/buttons/FilterBtn';
import ProductsContainer from '../../components/product/ProductsContainer';
import SortOption from '../../components/sortOption/sortOption';
import SearchBtnHome from '../../components/buttons/SearchBtnHome';
import GoBackBtn from '../../components/buttons/GoBackBtn';
import {useRoute} from '@react-navigation/native';
import {getProductOfShop} from '../../hooks/shops/useGetShops';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';

const sortLabel = [
  {id: 1, title: 'Mới nhất'},
  {id: 2, title: 'Bán chạy', style: 'border-x'},
  {id: 3, title: 'Giá', icon: {icon1: faArrowUp, icon2: faArrowDown}},
];

const DetailCategoriesScreen: React.FC = () => {
  const route = useRoute();
  const {shopId, id} = route.params;
  const dataProduct = getProductOfShop(shopId, id);

  return (
    <SafeAreaView className={`bg-white flex-1`}>
      <View className="flex-row m-3">
        <View className={'self-center mr-4'}>
          <GoBackBtn />
        </View>

        <SearchBtnHome />
        <View>
          <FilterBtn />
        </View>
      </View>
      <View>
        <SortOption label={sortLabel} data={dataProduct} />
      </View>
    </SafeAreaView>
  );
};

export default DetailCategoriesScreen;
