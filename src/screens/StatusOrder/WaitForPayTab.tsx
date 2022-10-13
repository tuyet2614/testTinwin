import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrder, getOrder} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {useRef} from 'react';

const WaitPay: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  const [totalItemDefault, setTotalItemDefault] = useState(10);

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Thanh toán ngay" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    setTotalItemDefault(10);
    dispatch(getOrder({TextSearch: '', Status: 1, skip: 0, take: 10}));
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrder({
        TextSearch: '',
        Status: 1,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    setTotalItemDefault(prev => prev + 10);
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
        refreshing={order.loading}
      />
    </SafeAreaView>
  );
};

export default WaitPay;
