import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ItemProduct} from '../../@types/apiReview';
import BtnOrder from '../../components/buttons/BtnOrder';
import {ModalBuyAgain} from '../../components/modal/ModalAddToCart';
import ModalCancel from '../../components/modal/modalCancel';
import {
  anotherOrange,
  beige,
  black,
  colorTextTitleNotifi,
  darkestGrey,
  grey,
  orangeBeige,
  whiteGrey,
} from '../../constant/const';
import {getDetailShippingAddress} from '../../redux/order/actions';
import {getOrderSelector} from '../../redux/order/selectors';
import {
  formartPhoneNumber,
  formatDateDetailOrder,
  toVND,
} from '../../Ultis/commons';
import {styles} from './style';

type Props = {
  titleBtn: string;
  btnPrimary: string;
};

const DetailOrder: React.FC = (props: Props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const {item} = route.params;
  const order = useSelector(getOrderSelector);
  const address = order.detailShippingAddress;
  const [status, setStatus] = useState<string>('');
  const [btn, setBtn] = useState<string>('');
  const [btnSecond, setBtnSecond] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(item, 'detail1');
  const dispatch = useDispatch();

  const navigateBtn = () => {
    switch (item.status) {
      case 1:
        setModalVisible(prev => !prev);
        break;
      case 2:
        setModalVisible(prev => !prev);
        break;
      case 3:
        setModalVisible(prev => !prev);
        break;
      case 4:
        break;
      case 5:
        navigation.navigate('Review', {item: item});
        break;
      case 0:
        break;
    }
  };
  const navigateSecond = () => {
    switch (item.status) {
      case 1:
        navigation.navigate('Payment', {item: item});
        break;
      case 5:
        break;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: 'Thông tin đơn hàng',
    });
    switch (item.status) {
      case 1:
        setStatus('chờ thanh toán');
        setBtn('Hủy đơn');
        setBtnSecond('Thanh toán ngay');
        break;
      case 2:
        setStatus('đang chờ xác nhận');
        setBtn('Hủy đơn');
        break;
      case 3:
        setStatus('đang được chuẩn bị');
        setBtn('Hủy đơn');
        break;
      case 4:
        setStatus('đang được giao');
        setBtn('Đã nhận');
        break;
      case 5:
        setStatus('đã giao');
        setBtn('Đánh giá');
        setBtnSecond('Mua lại');
        break;
      case 0:
        setStatus('đã hủy');
        setBtn('Mua lại');
        break;
    }

    dispatch(getDetailShippingAddress(item.shippingAddressId));
  }, [dispatch, item.shippingAddressId, item.status, navigation]);

  const renderProduct = (itemProduct: ItemProduct) => {
    return (
      <View style={styles.infor}>
        <Image
          source={{uri: itemProduct.image[0]}}
          style={styles.imgProduct}></Image>
        <View style={styles.textInfor}>
          <Text style={styles.productTitle}>{itemProduct.productName}</Text>
          <Text style={styles.productCode}>{itemProduct.code}</Text>
          <View style={style1.flexMt10}>
            <Text style={styles.price}>{toVND(itemProduct.price)}</Text>
            <Text style={styles.count}>x{itemProduct.quantity}</Text>
          </View>
        </View>
      </View>
    );
  };
  const renderTime = () => (
    <>
      <View style={style1.flex}>
        <Text style={style1.titleDate}>Thời gian đặt hàng</Text>
        <Text style={style1.dateTime}>
          {formatDateDetailOrder(new Date(item.assignedTime))}
        </Text>
      </View>
      <View style={style1.flexMBMT1}>
        <View style={style1.line} />
        <View style={style1.line} />
      </View>
      <View style={style1.flex}>
        <Text style={style1.titleDate}>Thời gian giao hàng</Text>
        <Text style={style1.dateTime}>
          {formatDateDetailOrder(new Date(item.shippingTime))}
        </Text>
      </View>
      <View style={style1.flexMBMT1}>
        <View style={style1.line} />
        <View style={style1.line} />
      </View>
      {item.paymentTime ? (
        <>
          <View style={style1.flex}>
            <Text style={style1.titleDate}>Thời gian thanh toán</Text>
            <Text style={style1.dateTime}>
              {formatDateDetailOrder(new Date(item.paymentTime))}
            </Text>
          </View>
          <View style={style1.flexMBMT1}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={style1.box}>
          <Image
            source={require('../../assets/order/logoShop.png')}
            style={style1.ImgLogo}
          />
          <Text style={style1.titleComfirm}>Đơn hàng {status}</Text>
        </View>
      </View>
      <Text style={style1.addressTitle}>Địa chỉ nhận hàng</Text>
      <View style={styles.card}>
        <View style={style1.row}>
          <Image source={require('../../assets/order/square.png')} />
          <View style={style1.m1520}>
            <Text style={style1.name}>{address?.name}</Text>
            <Text style={style1.phoneN}>
              {formartPhoneNumber(address?.phoneNumber)}
            </Text>
            <Text style={style1.address}>{address?.specificAddress}</Text>
          </View>
        </View>
      </View>
      <View style={style1.mt5}>
        <View style={styles.card}>
          <View style={style1.flexAlign} className="">
            <View style={styles.title}>
              <Image source={require('../../assets/order/shop.png')}></Image>
              <Text style={styles.textTitle}>{item.companyName}</Text>
            </View>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </View>
          {item?.orderDetails?.map((item1: ItemProduct) =>
            renderProduct(item1),
          )}
          <View style={style1.flexmbmte}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
          <View style={style1.flexMt20}>
            <Text style={style1.money}>Tổng tiền hàng</Text>
            <Text style={style1.money}>{toVND(item.totalPrice)}</Text>
          </View>
          <View style={style1.flexMBMT1}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
          <View style={style1.flex}>
            <Text style={style1.money}>Phí vận chuyển</Text>
            <Text style={style1.money}>{toVND(item.shippingFee)}</Text>
          </View>
          <View style={style1.flexMBMT1}>
            <View style={style1.line} />
            <View style={style1.line} />
          </View>
          <View style={style1.flex}>
            <Text style={style1.total}>Tổng số tiền</Text>
            <Text style={style1.money}>{toVND(item.totalPay)}</Text>
          </View>
        </View>
        {item.status !== 1 ? (
          <>
            <Text style={style1.pttt}>Phương thức thanh toán</Text>
            <View style={style1.mt}>
              <View style={styles.card}>
                <View style={style1.flex1}>
                  <Image
                    source={require('../../assets/order/wallet.png')}
                    style={style1.imgWallet}
                  />
                  <Text style={style1.wallet}>Ví Tin tin</Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <></>
        )}
        <View style={style1.mt}>
          <View style={styles.card}>
            <View style={style1.boxCode}>
              <Text style={style1.code}>Mã đơn hàng: {item.orderNumber}</Text>
            </View>
            {item.status !== 1 ? renderTime() : <></>}
            {item.status === 4 ? (
              <>
                <View style={style1.flex}>
                  <Text style={style1.titleDate}>
                    Thời gian giao hàng dự kiến trong vòng 24h
                  </Text>
                </View>
                <View style={style1.flexMbMt}>
                  <View style={style1.line} />
                  <View style={style1.line} />
                </View>
              </>
            ) : (
              <></>
            )}
            <View style={style1.mb10}>
              <BtnOrder content={btn} onPress={navigateBtn}></BtnOrder>
            </View>
            {btnSecond !== '' ? (
              <BtnOrder content={btnSecond} onPress={navigateSecond}></BtnOrder>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
      {item.status === 2 ? (
        <ModalCancel
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          item={item}
        />
      ) : (
        <></>
      )}
      {item.status === 0 ? (
        <ModalBuyAgain
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          item={item}
        />
      ) : (
        <></>
      )}
    </ScrollView>
  );
};
const style1 = StyleSheet.create({
  line: {flex: 1, height: 1, backgroundColor: whiteGrey},
  mb10: {marginBottom: 10, marginTop: 20},
  dateTime: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: grey,
  },
  titleDate: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: grey,
  },
  flexMb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  flexMbMt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 42,
  },
  flexMBMT1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 10,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  flex1: {flexDirection: 'row'},
  code: {
    marginLeft: 13,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: anotherOrange,
    textAlign: 'center',
  },
  boxCode: {
    height: 62,
    backgroundColor: beige,
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  mt: {marginTop: 11},
  wallet: {
    marginLeft: 11.5,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  imgWallet: {width: 19, height: 19},
  pttt: {
    marginLeft: 24,
    marginTop: 11,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
  },
  total: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: darkestGrey,
  },
  money: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: darkestGrey,
  },
  flexMt20: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  flexmbmte: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  flexMt10: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mt5: {marginTop: 5},
  address: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
    marginTop: 2,
  },
  phoneN: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: anotherOrange,
  },
  m1520: {marginLeft: 15, marginRight: 50},
  row: {flexDirection: 'row'},
  addressTitle: {
    marginLeft: 24,
    marginTop: 7,
    marginBottom: 8,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: colorTextTitleNotifi,
  },
  titleComfirm: {
    marginLeft: 13,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    color: black,
  },
  ImgLogo: {width: 40, height: 40},
  box: {
    //   flex: 1,
    borderWidth: 1,
    borderColor: orangeBeige,
    height: 62,
    backgroundColor: whiteGrey,
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default DetailOrder;
