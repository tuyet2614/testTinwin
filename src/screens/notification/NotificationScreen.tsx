import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  anotherGrey,
  anotherOrange,
  beige,
  black,
  blue,
  colorTextTitleNotifi,
  grey,
  white,
} from '../../constant/const';
import {getUser} from '../../redux/dataUser/actions';
import {getUserSelector} from '../../redux/dataUser/selectors';
import {
  getCountUnreadNotification,
  getMoreNotification,
  getNotification,
  maskAsRead,
} from '../../redux/notificationCustomer/actions';
import {getNotificationSelector} from '../../redux/notificationCustomer/selectors';
import {formatDate} from '../../Ultis/commons';

const NotificationScreen: React.FC = () => {
  const [bool, setBool] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const dataNotification = useSelector(getNotificationSelector);
  const user = useSelector(getUserSelector);
  var totalItemDefault = 10;
  // console.log(dataNotification);
  useEffect(() => {
    if (!user.currentUser) {
      (async () => {
        await AsyncStorage.clear();
      })();
      navigation.navigate('Login');
    }
  }, [navigation, user]);
  useEffect(() => {
    navigation.setOptions({title: 'Thông báo'});
    dispatch(getNotification({skip: 0, take: totalItemDefault}));
    dispatch(getUser());
    dispatch(getCountUnreadNotification());
  }, [navigation, dispatch]);

  const onPressItem = (id: string) => {
    dispatch(maskAsRead({notificationId: id}));
  };

  const renderItem = ({item}) => {
    let date = new Date(item.creationTime);
    return (
      <TouchableOpacity
        style={!item.isRead ? styles1.boxNotiYellow : styles1.boxNotiWhite}
        onPress={() => onPressItem(item.id)}>
        <View style={styles1.row}>
          <Image source={require('../../assets/payment/Redbull.png')}></Image>
          <View style={styles1.boxNoti}>
            <View style={styles1.mw272}>
              <Text style={styles1.titleContent}>{item.title}</Text>
              <Text style={styles1.title}>{item.body}</Text>
              <Text style={styles1.time}>{formatDate(date)}</Text>
            </View>
            {/* {bool ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={styles1.ml30}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={styles1.ml30}></FontAwesomeIcon>
            )} */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  if (dataNotification.notification === undefined) {
    return;
  }
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    Promise.resolve(
      dispatch(getNotification({skip: 0, take: totalItemDefault})),
    ).then(() => {
      setRefreshing(false);
    });
  }, []);
  const onLoadMore = () => {
    dispatch(getMoreNotification({skip: totalItemDefault, take: 10}));
    totalItemDefault = totalItemDefault + 10;
  };
  return (
    <View>
      <View style={styles1.flexAlign}>
        <Text style={styles1.update}>Cập nhật quan trọng</Text>
        <Text style={styles1.notifi}>
          {dataNotification?.notificationCount?.total} thông báo
        </Text>
      </View>
      {/* <TouchableOpacity onPress={bool1} style={styles1.open}>
        <View style={styles1.row}>
          <Image source={require('../../assets/payment/Redbull.png')}></Image>
          <View style={styles1.flexAlignMl8}>
            <View>
              <Text style={styles1.titleContent}>
                Giao kiện hàng thành công
              </Text>
              <Text style={styles1.title}>
                Mã vận đơn
                <Text style={styles1.content}> SPXVN0256737377377</Text> của đơn
                hàng <Text style={styles1.content}>SPXVN029922887466</Text> đã
                giao thành công đến bạn{' '}
              </Text>
              <Text style={styles1.time}>11:12</Text>
            </View>
            {bool ? (
              <FontAwesomeIcon
                icon={faAngleUp}
                style={styles1.mr30}></FontAwesomeIcon>
            ) : (
              <FontAwesomeIcon
                icon={faAngleDown}
                style={styles1.mr30}></FontAwesomeIcon>
            )}
          </View>
        </View>
      </TouchableOpacity> */}
      {/* <View
        style={{backgroundColor: greyNoti, display: bool ? 'flex' : 'none'}}>
        <View style={styles1.boxNotiOpen}>
          <Text style={styles1.titleContent}>Xác nhận đơn hàng</Text>
          <Text style={styles1.title}>
            Vui lòng chọn “ Đã nhận được hàng” cho đơn hàng{' '}
            <Text style={styles1.content}>SPXVN029922887466</Text>
            nếu bạn hài lòng về sản phẩm, dịch vụ và không có nhu cầu Trả
            hàng/hoàn tiền.{' '}
          </Text>
          <Text style={styles1.time}>11:12{'      '} 22/05/2022</Text>
        </View>
        <View style={styles1.boxNotiOpen}>
          <Text style={styles1.titleContent}>Đang vận chuyển</Text>
          <Text style={styles1.title}>
            Mã vận đơn <Text style={styles1.content}>SPXVN029922887466</Text>{' '}
            của đơn hàng <Text style={styles1.content}>SPXVN029922887466</Text>{' '}
            đã được đại lý cửa hàng An An giao cho đơn vị vận chuyển
          </Text>
          <Text style={styles1.time}>11:12{'      '} 22/05/2022</Text>
        </View>
        <View style={styles1.boxNotiOpen}>
          <Text style={styles1.titleContent}>Xác nhận đã thanh toán</Text>
          <Text style={styles1.title}>
            Thanh toán cho đơn hàng{' '}
            <Text style={styles1.content}>SPXVN029922887466</Text> thành công.
            Vui lòng kiểm tra thời gian nhận hàng dự kiến nhé!
          </Text>
          <Text style={styles1.time}>11:12{'      '} 22/05/2022</Text>
        </View>
      </View> */}
      <FlatList
        data={dataNotification?.notification?.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={onLoadMore}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
      {/* {dataNotification?.notification?.items?.map((item: object) =>
        renderItem(item),
      )} */}
      {/* <TouchableOpacity style={styles1.btnNoti}>
        <View style={styles1.row}>
          <LinearGradient
            className={`rounded-md`}
            colors={[orangeLight, orangeDark]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 1]}
            style={styles1.linePayment}>
            <View style={styles1.boxNoti}>
              <Image
                source={require('../../assets/payment/tinwinLG.png')}></Image>
            </View>
          </LinearGradient>

          <View style={styles1.boxNoti}>
            <View style={styles1.mw295}>
              <Text style={styles1.titleContent}>Nạp tiền thành công</Text>
              <Text style={styles1.title}>
                Nạp thành công số tiền{' '}
                <Text style={styles1.content}>100 000đ</Text> vào ví Tinwin từ
                tài khoản <Text style={styles1.content}>techcombank</Text>. Hãy
                kiểm tra lại tài khoản của mình.
              </Text>
              <Text style={styles1.time}>11:12</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles1 = StyleSheet.create({
  notifi: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: anotherOrange,
    marginRight: 20,
    marginTop: 7,
    marginBottom: 7,
  },
  update: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: black,
    marginLeft: 20,
    marginTop: 7,
    marginBottom: 7,
  },
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  open: {
    backgroundColor: white,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  time: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: grey,
    marginTop: 6,
  },
  title: {
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
    color: anotherGrey,
  },
  content: {color: blue},
  titleContent: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
    marginBottom: 4,
    marginRight: 115,
  },
  mw295: {maxWidth: 295},
  boxNoti: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonNoti: {
    width: 32,
    height: 32,
    padding: 3.5,
  },
  ml30: {marginLeft: 30},
  btnNoti: {
    backgroundColor: white,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  row: {flexDirection: 'row'},
  mw272: {maxWidth: 272},
  boxNotiWhite: {
    backgroundColor: white,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  boxNotiYellow: {
    backgroundColor: beige,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 10,
  },
  boxNotiOpen: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 57,
    marginRight: 20,
  },
  mr30: {marginRight: 30},
  flexAlignMl8: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linePayment: {
    maxWidth: 32,
    maxHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NotificationScreen;
