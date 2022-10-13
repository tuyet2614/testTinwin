import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeTitle from '../home/HomeTitle';
import StallCard from '../home/StallCard';
import { useNavigation } from '@react-navigation/native';
import CategoryCard from './CategoryCard';
import { NAVIGATE_SHOP_DETAIL } from '../../navigation/navigate';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

interface Props {
  data: object[];
  title: string;
  icon?: ImageSourcePropType;
  flatlistStyle?: object;
  textBtn?: string;
  onPress?: () => void
}

const CategoriesContainer: React.FC<Props> = (props: Props) => {
  const { data, icon, title, flatlistStyle, textBtn, onPress } = props;

  const [isEnd, setIsEnd] = useState(false);
  const navigation = useNavigation()
  const onPressRoute = (item) => {
    navigation.navigate(NAVIGATE_SHOP_DETAIL, { id: item.id })
  }
  const end = () => {
    setIsEnd(false);
  };

  const start = () => {
    setIsEnd(true);
  };

  const renderItem = ({ item }) =>
    title === 'Ngành hàng' ? (
      <CategoryCard image={item.image} text={item.name} onPress={onPress} />
    ) : (
      <StallCard image={item.avatar} text={item.name} onPress={() => onPressRoute(item)} />
    );



  return (
    <View>
      <HomeTitle title={title} icon={icon} textBtn={textBtn} />
      <FlatList
        onScrollBeginDrag={end}
        onEndReached={start}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={flatlistStyle}
        columnWrapperStyle={
          flatlistStyle.num !== undefined ? flatlistStyle : undefined
        }
        numColumns={
          flatlistStyle.num !== undefined ? flatlistStyle.num : undefined
        }
        horizontal={flatlistStyle.num !== undefined ? false : true}
        data={data}
        keyExtractor={key => key.id}
        renderItem={renderItem}
      />
      {flatlistStyle.num === undefined ? (
        <View className="bg-gray-200 w-8 h-1 flex-row rounded-full my-5 self-center">
          <View
            className={`bg-${!isEnd ? 'orange-primary' : 'gray-200'
              } w-1/2 h-1 rounded-full`}></View>
          <View
            className={`bg-${isEnd ? 'orange-primary' : 'gray-200'
              } w-1/2 h-1 rounded-full`}></View>
        </View>
      ) : (
        <TouchableOpacity className="flex-row items-center self-center my-3">
          <Text className="text-orange-primary mr-2">Hiển thị thêm</Text>
          <FontAwesomeIcon icon={faAngleDown} color="#FD7D00" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategoriesContainer;
