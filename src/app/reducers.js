import { combineReducers } from 'redux';
import authReducer from '../redux/authentication/reducers';
import dataUserReducer from '../redux/dataUser/reducers';
import defaultAddressReducer from '../redux/defaultAddress/reducers';
import notificationReducer from '../redux/notification/reducers';
import notificationCustomerReducer from '../redux/notificationCustomer/reducers';
import orderReducers from '../redux/order/reducers';
import userReducer from '../redux/user/reducers';
import wishlistReducer from '../redux/wishlist/reducers';
import productReducer from '../redux/shop/reducers';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  showNotification: notificationReducer,
  defaultAddress: defaultAddressReducer,
  auth: authReducer,
  notification: notificationCustomerReducer,
  order: orderReducers,
  dataUser: dataUserReducer,
  product: productReducer
});

export default rootReducer;
