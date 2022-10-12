import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrderPrepare, getOrderPrepare} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {useRef} from 'react';

const Prepare: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  let totalItemDefault = useRef(10);
  const [refreshing, setRefreshing] = React.useState(false);
  // useFocusEffect(() => {
  //   dispatch(getOrderPrepare({TextSearch: '', Status: 2, skip: 10, take: 10}));
  // });

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Huỷ đơn" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    totalItemDefault.current = 10;
    setRefreshing(true);
    Promise.resolve(
      dispatch(
        getOrderPrepare({
          TextSearch: '',
          Status: 3,
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
      getMoreOrderPrepare({
        TextSearch: '',
        Status: 3,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    totalItemDefault.current = totalItemDefault.current + 10;
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
