import {createSelector} from 'reselect';

const notificationReducer = (state: any) => state.notification;

export const getNotificationSelector = createSelector(
  notificationReducer,
  state => state,
);
