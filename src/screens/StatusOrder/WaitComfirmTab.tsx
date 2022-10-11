import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {
  getMoreOrderWaitComfirm,
  getOrderWaitComfirm,
} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';

const WaitComfirm: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  let totalItemDefault = 10;
  const [refreshing, setRefreshing] = React.useState(false);

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Thanh toán ngay" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(
      getOrderWaitComfirm({
        TextSearch: '',
        Status: 1,
        skip: 0,
        take: 10,
      }),
    );
    setRefreshing(false);
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderWaitComfirm({
        TextSearch: '',
        Status: 1,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    totalItemDefault = totalItemDefault + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderWaitComfirm?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default WaitComfirm;
