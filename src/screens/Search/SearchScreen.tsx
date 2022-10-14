import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ScrollView,
} from 'react-native';
import SearchBar from '../../components/SearchField';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from '@react-navigation/native';
import ListCategories from '../../components/item/ListCategories';
import TitleSearch from '../../components/item/TitleSearch';
import {cancel_icon} from '../../assets/images';
import CategoriesContainer from '../../components/categories/CategoriesContainer';
import useGetCategoriesForHome from '../../hooks/home/useGetCategoriesForHome';
import {Industry_icon} from '../../assets/images';
import {
  NAVIGATE_HOME,
  NAVIGATE_SEARCH_DETAIL_SCREEN,
} from '../../navigation/navigate';
import {white} from '../../constant/const';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'áo thun',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'áo croptop',
  },
];

const SearchScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const {categories, loadingCategories} = useGetCategoriesForHome();
  const onPressRouteHome = () => {
    navigation.navigate(NAVIGATE_HOME);
  };
  const onPressRouteSearch = () => {
    navigation.navigate(NAVIGATE_SEARCH_DETAIL_SCREEN);
  };
  return (
    <SafeAreaView className="bg-white pt-3 flex-1">
      <ScrollView>
        <View className={`px-6`}>
          <View className={`flex-row`}>
            <SearchBar placeholder="Tìm kiếm" width={280} />
            <View className={`flex self-center ml-6 absolute top-3 right-3`}>
              <TouchableOpacity onPress={onPressRouteHome}>
                <Image source={cancel_icon} />
              </TouchableOpacity>
            </View>
          </View>

          <View className={`mt-4`}>
            <Text className={`text-[#2D2D2D] text-[15px] font-bold`}>
              Tìm kiếm gần đây
            </Text>
          </View>
          <View>
            {DATA.map(
              (item, index) =>
                index < 3 && (
                  <TitleSearch title={item.title} id={item.id} key={item.id} />
                ),
            )}
          </View>
        </View>

        <View className={`w-fit h-1.5 bg-[#F9F9F9]`} />

        <View>
          <CategoriesContainer
            textBtn=""
            flatlistStyle={[tw`flex-wrap`, {width: 500}]}
            title="Danh mục hàng"
            icon={Industry_icon}
            data={categories}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  categories: {
    backgroundColor: white,
  },
});
