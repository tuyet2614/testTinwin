import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {
  getMoreOrderWaitComfirm,
  getOrderWaitComfirm,
} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {useRef} from 'react';

const WaitComfirm: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  const totalItemDefault = useRef(10);

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Hủy đơn" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    totalItemDefault.current = 10;
    dispatch(
      getOrderWaitComfirm({
        TextSearch: '',
        Status: 2,
        skip: 0,
        take: 10,
      }),
    );
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderWaitComfirm({
        TextSearch: '',
        Status: 2,
        skip: totalItemDefault.current,
        take: 10,
      }),
    );
    totalItemDefault.current = totalItemDefault.current + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderWaitComfirm?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={order.loading}
      />
    </SafeAreaView>
  );
};

export default WaitComfirm;
