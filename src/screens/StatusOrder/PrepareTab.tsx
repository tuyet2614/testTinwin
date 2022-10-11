import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrderPrepare, getOrderPrepare} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';

const Prepare: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  let totalItemDefault = 10;
  const [refreshing, setRefreshing] = React.useState(false);
  // useFocusEffect(() => {
  //   dispatch(getOrderPrepare({TextSearch: '', Status: 2, skip: 10, take: 10}));
  // });

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Huỷ đơn" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(
      getOrderPrepare({
        TextSearch: '',
        Status: 2,
        skip: 0,
        take: 10,
      }),
    );
    setRefreshing(false);
  }, [dispatch]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderPrepare({
        TextSearch: '',
        Status: 2,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    totalItemDefault = totalItemDefault + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderPrepare?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default Prepare;
