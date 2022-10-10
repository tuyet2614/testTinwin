import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useState} from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeTitle from '../home/HomeTitle';
import StallCard from '../home/StallCard';
import {useNavigation} from '@react-navigation/native';
import CategoryCard from './CategoryCard';

interface Props {
  data: object[];
  title: string;
  icon: ImageSourcePropType;
  flatlistStyle?: object;
  textBtn: string;
  loadingCategories: boolean;
}

const CategoriesContainer: React.FC<Props> = (props: Props) => {
  const {data, icon, title, flatlistStyle, textBtn, loadingCategories} = props;

  const [isEnd, setIsEnd] = useState(false);

  const end = () => {
    setIsEnd(false);
  };

  const start = () => {
    setIsEnd(true);
  };

  const renderItem = ({item}) =>
    !loadingCategories ? (
      title === 'Ngành hàng' ? (
        <CategoryCard image={item.avatar} text={item.name} />
      ) : (
        <StallCard image={item.avatar} text={item.name} />
      )
    ) : (
      <View className="items-center justify-center h-40 w-40">
        <View className="h-24 w-24 bg-gray-200"></View>
        <View className="h-5 w-24 bg-gray-200"></View>
      </View>
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
            className={`bg-${
              !isEnd ? 'orange-400' : 'gray-200'
            } w-1/2 h-1 rounded-full`}></View>
          <View
            className={`bg-${
              isEnd ? 'orange-400' : 'gray-200'
            } w-1/2 h-1 rounded-full`}></View>
        </View>
      ) : (
        <TouchableOpacity className="flex-row items-center self-center my-3">
          <Text className="text-orange-400 mr-2">Hiển thị thêm</Text>
          <FontAwesomeIcon icon={faAngleDown} color="#FD7D00" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategoriesContainer;
