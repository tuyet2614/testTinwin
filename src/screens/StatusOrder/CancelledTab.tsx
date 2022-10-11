import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CardOrder from '../../components/cards/CardOrder';
import {getMoreOrderCancel, getOrderCancel} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';

const Cancel: React.FC = () => {
  const dispatch = useDispatch();
  const order = useSelector(getOrderSelector);
  let totalItemDefault = 10;
  const [refreshing, setRefreshing] = React.useState(false);
  // useFocusEffect(() => {
  //   dispatch(getOrderCancel({TextSearch: '', Status: 5, skip: 10, take: 10}));
  // });

  const renderCard = ({item}) => {
    return <CardOrder titleBtn="Mua lại" item={item} />;
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(
      getOrderCancel({
        TextSearch: '',
        Status: 5,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    setRefreshing(false);
  }, [dispatch, totalItemDefault]);
  const onLoadMore = () => {
    dispatch(
      getMoreOrderCancel({
        TextSearch: '',
        Status: 5,
        skip: totalItemDefault,
        take: 10,
      }),
    );
    totalItemDefault = totalItemDefault + 10;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={order?.orderCancel?.items}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        onRefresh={onRefresh}
        onEndReached={onLoadMore}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default Cancel;
