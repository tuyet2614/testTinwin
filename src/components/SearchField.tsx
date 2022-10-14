import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
} from 'react-native';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useSearchProduct} from '../hooks/search/searchProduct';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import TitleSearch from './item/TitleSearch';
import {colors} from '../assets/colors';
import {cancel_icon} from '../assets/images';
import {useNavigation} from '@react-navigation/native';
import {
  NAVIGATE_HOME,
  NAVIGATE_SEARCH_DETAIL_SCREEN,
} from '../navigation/navigate';

interface TextFieldProps {
  width: number;
  placeholder: string;
}

const SearchBar: React.FC<TextFieldProps> = props => {
  const {width, placeholder} = props;
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const onPressRouteHome = () => {
    navigation.navigate(NAVIGATE_HOME);
  };
  const onPressRouteSearch = (keyword: string) => {
    navigation.navigate(NAVIGATE_SEARCH_DETAIL_SCREEN, {keyword: keyword});
  };

  const product = useSearchProduct(searchText);

  return (
    <View>
      <View
        className={`flex-row  h-[45px]
        rounded-lg border-solid border border-gray-200 px-3.5`}
        style={{width: width}}>
        <View className="pt-3.5">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color={`${colors.lightGray}`}
            size={18}
          />
        </View>
        <TextInput
          className={`pl-2`}
          placeholder={placeholder}
          autoCapitalize="none"
          onChangeText={text => setSearchText(text)}
          // value={searchText}
        />
      </View>

      <View>
        {product.map(item => (
          <TitleSearch title={item} onPress={() => onPressRouteSearch(item)} />
        ))}
      </View>
    </View>
  );
};

export default SearchBar;
