import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
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
  let totalItemDefault = useRef(10);
  const [refreshing, setRefreshing] = React.useState(false);
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
    setRefreshing(true);
    Promise.resolve(
      dispatch(
        getOrderDelivering({
          TextSearch: '',
          Status: 4,
          skip: 0,
          take: 10,
        }),
      ),
    ).then(() => {
      setRefreshing(false);
    });
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderDelivering({
        TextSearch: '',
        Status: 4,
        skip: totalItemDefault,
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
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default Delivering;
