import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect, useState} from 'react';
import ProductsContainer from '../product/ProductsContainer';
import {useSelector, useDispatch} from 'react-redux';
import {getProductState} from '../../redux/shop/selector';
import {
  sortProductByName,
  sortProductByPrice,
  sortProductBySeller,
} from '../../redux/shop/action';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface Props {
  data: object;
  label: object[];
}

const SortOption: React.FC<Props> = props => {
  const {data, label} = props;
  const [renderData, setRenderData] = useState(data);
  const [status, setStatus] = useState(label[0].title);
  const [asc, setAsc] = useState();
  const setStatusFilter = (item: string) => {
    setStatus(item);
  };
  const product = useSelector(getProductState);
  const dispatch = useDispatch();
  const listData = renderData ? renderData : product.product;
  console.log('data:', data);

  const onPressSortPrice = () => {
    dispatch(sortProductByPrice(data, asc));
  };

  const onPressSortSold = () => {
    dispatch(sortProductBySeller(data));
  };
  const onPressByName = () => {
    dispatch(sortProductByName(data, asc));
  };

  const getNewProduct = () => {
    let newProduct: [] = [];
    Array.isArray(data)
      ? data.map(item =>
          item.retailerTotalQuantity > 0 ? newProduct.push(item) : '',
        )
      : '';

    setRenderData(newProduct);
  };

  useEffect(getNewProduct, []);

  const getProductData = item => {
    const status = item.title;
    setStatusFilter(status);
    console.log(item.id);
    switch (status) {
      case 'Mới nhất':
        setAsc();
        return getNewProduct();
      case 'Bán chạy':
        setAsc();
        setRenderData();

        return onPressSortSold();
      case 'Giá':
        setRenderData();
        return onPressSortPrice();
      case 'Name':

      default:
        return data;
    }
  };

  return (
    <View>
      <View className={`flex-row px-6 mt-6`}>
        {label.map(item => (
          <TouchableOpacity
            className={`w-28 items-center ${item.style}`}
            key={item.id}
            onPress={() => {
              getProductData(item), item.id === 3 ? setAsc(!asc) : '';
            }}>
            <View style={styles.listIcon}>
              <Text
                className={`mr-1 ${
                  status === item.title ? 'text-[#FC832D]' : 'text-[#48484A]'
                }`}>
                {item.title}
              </Text>
              {item.check ? (
                <View>
                  <Text
                    style={{
                      color: item.title === status ? '#FC832D' : '#48484A',
                    }}>
                    {asc ? item.check[0] : item.check[1]}
                  </Text>
                </View>
              ) : (
                ''
              )}

              {item.icon ? (
                <View>
                  <FontAwesomeIcon
                    icon={item.icon.icon1}
                    size={10}
                    color={
                      asc === undefined
                        ? '#48484A'
                        : !asc && item.id === 3
                        ? '#FC832D'
                        : '#48484A'
                    }
                  />
                  <FontAwesomeIcon
                    icon={item.icon.icon2}
                    size={10}
                    color={asc ? '#FC832D' : '#48484A'}
                  />
                </View>
              ) : (
                ''
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View className={`h-full`}>
        {/* <Text>check</Text> */}
        {listData ? (
          <ProductsContainer
            flatlistStyle={{justifyContent: 'space-evenly'}}
            data={listData}
          />
        ) : (
          <View className={`h-[100px]`}>
            <Text className={`text-[#f20]`}>
              Không tìm thấy sản phẩm phù hợp
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default SortOption;

const styles = StyleSheet.create({
  listIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
});
