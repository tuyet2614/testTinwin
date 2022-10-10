import {get, put} from './AxiosHelper';

const NotificationServices = {
  getNotification(params) {
    return get('/webbff/notification/api/notification', params);
  },
  getNotificationCountUnread(params) {
    return get('/webbff/notification/api/notification/count-unread', params);
  },
  maskRead(params) {
    return put('/webbff/notification/api/notification/mark-as-read', params);
  },
};

export default NotificationServices;
