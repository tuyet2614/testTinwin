import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrder, getOrder} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';

const WaitPay: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  let totalItemDefault = 10;
  const [refreshing, setRefreshing] = React.useState(false);

  // useFocusEffect(() => {
  //   dispatch(getOrder({TextSearch: '', Status: 0, skip: 10, take: 10}));
  // });

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Thanh toán ngay" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(getOrder({TextSearch: '', Status: 0, skip: 0, take: 10}));
    setRefreshing(false);
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrder({
        TextSearch: '',
        Status: 0,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    totalItemDefault = totalItemDefault + 10;
  };
  if (!order.orderWaitPay) {
    return;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={order.orderWaitPay.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default WaitPay;
