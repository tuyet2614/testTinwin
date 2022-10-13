import React, {useRef, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {
  getMoreOrderDelivered,
  getOrderDelivered,
} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';

const Delivered: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  const totalItemDefault = useRef(10);
  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Mua lại" item={item} btnPrimary="Đánh giá" />;
  };
  const onRefresh = React.useCallback(() => {
    totalItemDefault.current = 10;
    dispatch(
      getOrderDelivered({
        TextSearch: '',
        Status: 4,
        skip: 0,
        take: 10,
      }),
    );
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderDelivered({
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
        data={order?.orderDelivered?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={order.loading}
      />
    </SafeAreaView>
  );
};

export default Delivered;
