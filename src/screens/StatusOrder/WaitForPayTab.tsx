import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrder, getOrder} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {useRef, useEffect} from 'react';
import OrderServices from '../../services/OrderServices';

// var _ = require('lodash');
const WaitPay: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  const totalItemDefault = useRef(10);
  // const [supplier, setSupplier] = useState([]);

  const renderCard = ({item, index}) => {
    return (
      <CardOrder
        titleBtn="Thanh toán ngay"
        item={item}
        index={index}
        // supplier={supplier}
      />
    );
  };
  const onRefresh = React.useCallback(() => {
    totalItemDefault.current = 10;
    dispatch(getOrder({TextSearch: '', Status: 1, skip: 0, take: 10}));
  }, [dispatch]);
  const onLoadMore = () => {
    console.log(totalItemDefault.current);
    dispatch(
      getMoreOrder({
        TextSearch: '',
        Status: 1,
        skip: totalItemDefault.current,
        take: 10,
      }),
    );
    totalItemDefault.current = totalItemDefault.current + 10;
  };

  // useEffect(() => {
  //   if (_.isEmpty(order.orderWaitPay.item)) {
  //     const arr = order.orderWaitPay?.items?.map((item: object) => {
  //       return item.supplierId;
  //     });
  //     OrderServices.getSupplier(Object.assign({}, arr)).then(res =>
  //       console.log(res),
  //     );
  //   }
  // }, [order]);
  // useEffect(() => {
  //   console.log(supplier);
  // }, [supplier]);

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
