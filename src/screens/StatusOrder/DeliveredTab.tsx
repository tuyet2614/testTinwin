import React from 'react';
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
  let totalItemDefault = 10;
  const [refreshing, setRefreshing] = React.useState(false);
  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Mua lại" item={item} btnPrimary="Đánh giá" />;
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(
      getOrderDelivered({
        TextSearch: '',
        Status: 4,
        skip: 0,
        take: 10,
      }),
    );
    setRefreshing(false);
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderDelivered({
        TextSearch: '',
        Status: 4,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    totalItemDefault = totalItemDefault + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderDelivered?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default Delivered;
