import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrderCancel, getOrderCancel} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {useRef} from 'react';

const Cancel: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  const totalItemDefault = useRef(10);
  // useFocusEffect(() => {
  //   dispatch(getOrderCancel({TextSearch: '', Status: 5, skip: 10, take: 10}));
  // });

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Mua lại" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    totalItemDefault.current = 10;
    dispatch(
      getOrderCancel({
        TextSearch: '',
        Status: 5,
        skip: 0,
        take: 10,
      }),
    );
  }, [dispatch, totalItemDefault]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderCancel({
        TextSearch: '',
        Status: 5,
        skip: totalItemDefault.current,
        take: 10,
      }),
    );
    totalItemDefault.current = totalItemDefault.current + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderCancel?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={order.loading}
      />
    </SafeAreaView>
  );
};

export default Cancel;
