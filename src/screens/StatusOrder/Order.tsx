import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getOrder,
  getOrderCancel,
  getOrderDelivered,
  getOrderDelivering,
  getOrderPrepare,
  getOrderWaitComfirm,
  getReasonCancel,
} from '../../redux/order/actions';
import TabNavi from './TabNavigator';

const Order: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(getOrder({TextSearch: '', Status: 1, skip: 0, take: 10}));
      dispatch(
        getOrderWaitComfirm({TextSearch: '', Status: 2, skip: 0, take: 10}),
      );
      dispatch(getOrderPrepare({TextSearch: '', Status: 3, skip: 0, take: 10}));
      dispatch(
        getOrderDelivering({TextSearch: '', Status: 4, skip: 0, take: 10}),
      );
      dispatch(
        getOrderDelivered({TextSearch: '', Status: 5, skip: 0, take: 10}),
      );
      dispatch(getOrderCancel({TextSearch: '', Status: 0, skip: 0, take: 10}));
      dispatch(getReasonCancel());
    })();
  }, [dispatch]);
  return <TabNavi />;
};

export default Order;
