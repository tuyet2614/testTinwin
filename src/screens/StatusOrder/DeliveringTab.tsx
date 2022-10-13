import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {
  getMoreOrder,
  getMoreOrderDelivering,
  getOrderDelivering,
} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {useRef} from 'react';

const Delivering: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  const totalItemDefault = useRef(10);
  // useFocusEffect(() => {
  //   dispatch(
  //     getOrderDelivering({TextSearch: '', Status: 3, skip: 10, take: 10}),
  //   );
  // });

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Đã nhận" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    totalItemDefault.current = 10;
    dispatch(
      getOrderDelivering({
        TextSearch: '',
        Status: 4,
        skip: 0,
        take: 10,
      }),
    );
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderDelivering({
        TextSearch: '',
        Status: 4,
        skip: totalItemDefault.current,
        take: 10,
      }),
    );
    totalItemDefault.current = totalItemDefault.current + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderDelivering?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={order.loading}
      />
    </SafeAreaView>
  );
};

export default Delivering;
