import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {useState, useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {darkestGrey, lightGrey, whiteGrey} from '../../constant/const';
import {styles} from '../../screens/StatusOrder/style';
import BtnOrder from '../buttons/BtnOrder';
import {ModalBuyAgain} from '../modal/ModalAddToCart';
import ModalCancel from '../modal/modalCancel';
import {toVND} from '../../Ultis/commons';

interface Props {
  style: string;
  onPress?: () => void;
  prop?: object;
  content: string;
  item: {};
  titleBtn: string;
  btnPrimary: string;
}

const CardOrder: React.FC<Props> = props => {
  const {titleBtn, btnPrimary, item} = props;
  const [hideItem, setHideItem] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const navi = () => {
    if (titleBtn === 'Thanh toán ngay') {
      navigation.navigate('Payment', {item: item});
    }
    if (titleBtn === 'Đã nhận') {
      navigation.navigate('OrderSuccess');
    }
    setModalVisible(true);
  };
  const naviReview = () => {
    navigation.navigate('Review', {item: item});
  };
  const changeHideItem = () => {
    setHideItem(!hideItem);
  };
  const seeDetail = () => {
    navigation.navigate('DetailOrder', {item: item});
  };

  const renderItem = (item, index) => {
    if (hideItem) {
      if (index >= 1) {
        return <></>;
      } else {
        return (
          <View style={styles.infor} key={item.productId}>
            <Image
              source={{uri: item.image[0]}}
              style={styles.imgProduct}></Image>
            <View style={styles.textInfor}>
              <Text style={styles.productTitle}>{item.productName}</Text>
              <Text style={styles.productCode}>MÃ SP: {item.code}</Text>
              <View style={style1.flexMt}>
                <Text style={styles.price}>{toVND(item.price)}</Text>
                <Text style={styles.count}>x{item.quantity}</Text>
              </View>
            </View>
          </View>
        );
      }
    } else {
      return (
        <View style={styles.infor} key={item.productId}>
          <Image
            source={{uri: item.image[0]}}
            style={styles.imgProduct}></Image>
          <View style={styles.textInfor}>
            <Text style={styles.productTitle}>{item.productName}</Text>
            <Text style={styles.productCode}>MÃ SP: {item.code}</Text>
            <View style={style1.flexMt}>
              <Text style={styles.price}>{toVND(item.price)}</Text>
              <Text style={styles.count}>x{item.quantity}</Text>
            </View>
          </View>
        </View>
      );
    }
  };
  const getTotalQuantity = items => {
    let total = 0;
    items?.map(item => {
      total = total + item.quantity;
    });
    return total;
  };
  const seeMore = () => {
    return (
      <>
        <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View>
        <TouchableOpacity style={style1.alignSelfItem}>
          <Text style={style1.textMore} onPress={changeHideItem}>
            Xem thêm sản phẩm
          </Text>
          <FontAwesomeIcon
            icon={faAngleDown}
            size={12}
            color={lightGrey}></FontAwesomeIcon>
        </TouchableOpacity>
      </>
    );
  };
  const renderSeeMore = () => {
    return hideItem ? seeMore() : <></>;
  };

  if (!item) {
    return;
  }
  return (
    <TouchableOpacity onPress={seeDetail}>
      <View style={styles.card}>
        <View style={styles.title}>
          <Image source={require('../../assets/order/shop.png')}></Image>
          <Text style={styles.textTitle}>{item.companyName}</Text>
        </View>
        {item?.orderDetails?.map((item, index) => renderItem(item, index))}

        {item?.orderDetails?.length > 1 ? renderSeeMore() : <></>}
        <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View>
        <View style={style1.flexAlign}>
          <Text style={styles.totalCount}>
            {getTotalQuantity(item?.orderDetails)} sản phẩm
          </Text>
          <View style={style1.flexAlign}>
            <Text style={style1.titleTotal}>Tổng thanh toán</Text>
            <Text style={styles.totalPrice}>{toVND(item.totalPay)}</Text>
          </View>
        </View>
        <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View>
        <View
          style={{
            width: btnPrimary ? 160 : 140,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {btnPrimary ? (
            <View style={style1.m0}>
              <BtnOrder content={btnPrimary} onPress={naviReview} />
            </View>
          ) : (
            <View></View>
          )}
          <View>
            <BtnOrder content={titleBtn} onPress={navi} />
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
        {titleBtn === 'Mua lại' ? (
          <ModalBuyAgain
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            item={item}
          />
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};
const style1 = StyleSheet.create({
  m0: {marginRight: 10},
  line: {flex: 1, height: 1, backgroundColor: whiteGrey},
  boxLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  titleTotal: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    color: darkestGrey,
  },
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textMore: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: lightGrey,
    marginRight: 6,
  },
  alignSelfItem: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexMt: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default CardOrder;
