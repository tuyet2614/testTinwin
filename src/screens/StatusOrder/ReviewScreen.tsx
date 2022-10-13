import {faStar} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import BtnOrder from '../../components/buttons/BtnOrder';
import ModalCancel from '../../components/modal/modalCancel';
import {
  anotherGrey,
  black,
  darkerGrey,
  darkestGrey,
  orangeDark,
  whiteGrey,
} from '../../constant/const';
import {review} from '../../redux/review/actions';
import {styles} from '../../screens/StatusOrder/style';
import ReviewServices from '../../services/ReviewServices';

const Review: React.FC = () => {
  const navigation = useNavigation();
  const [choose, setChoose] = useState<[number] | undefined>([]);
  const [rating, setRating] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute();
  const {item} = route.params;
  const dispatch = useDispatch();
  var _ = require('lodash');
  useEffect(() => {
    navigation.setOptions({
      title: 'Đánh giá sản phẩm',
    });
  }, []);

  const onReview = () => {
    const arr = item.orderDetails.map(item => {
      return {
        content: 'string',
        productId: item.productId,
        ratePoint: rating,
        rateOptions: choose,
      };
    });
    var data = {
      orderId: item.id,
      productRatings: arr,
    };
    ReviewServices.review(data).then(res => {});
    navigation.goBack();
  };
  const setStar = (value: number) => {
    setRating(value);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const setChoose1 = () => {
    if (choose.includes(1)) {
      setChoose(prev => prev?.filter(i => i !== 1));
    } else {
      setChoose(_.concat(choose, 1));
    }
  };
  const setChoose2 = () => {
    if (choose.includes(2)) {
      setChoose(prev => prev?.filter(i => i !== 2));
    } else {
      setChoose(_.concat(choose, 2));
    }
  };
  const setChoose3 = () => {
    if (choose.includes(3)) {
      setChoose(prev => prev?.filter(i => i !== 3));
    } else {
      setChoose(_.concat(choose, 3));
    }
  };
  const setChoose4 = () => {
    if (choose.includes(4)) {
      setChoose(prev => prev?.filter(i => i !== 4));
    } else {
      setChoose(_.concat(choose, 4));
    }
  };

  const renderProduct = item => {
    return (
      <>
        <View style={style1.row}>
          <Image source={{uri: item.image[0]}} style={style1.star}></Image>
          <View style={styles.textInfor}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style1.textProduct}>{item.productName}</Text>
            </TouchableOpacity>
            <View style={style1.mt10}>
              <Text style={styles.price}></Text>
              <Text style={styles.count}>x{item.quantity}</Text>
            </View>
          </View>
        </View>
        <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <Text style={style1.titleP}>Sản phẩm</Text>
      <View style={style1.boxProduct} className="bg-neutral-50">
        {item?.orderDetails?.map(item => renderProduct(item))}
        <View style={style1.alignSelfItem}>
          <TouchableOpacity onPress={() => setStar(1)} style={style1.mr5}>
            <Image
              source={require('../../assets/order/Vector.png')}
              style={style1.star}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(2)} style={style1.mr5}>
            {rating >= 2 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(3)} style={style1.mr5}>
            {rating >= 3 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(4)} style={style1.mr5}>
            {rating >= 4 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setStar(5)}>
            {rating == 5 ? (
              <Image
                source={require('../../assets/order/Vector.png')}
                style={style1.star}></Image>
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                size={48}
                color={orangeDark}></FontAwesomeIcon>
            )}
          </TouchableOpacity>
        </View>

        <View style={style1.flexAlign}>
          <Text style={style1.yourReview}>Đánh giá của bạn</Text>
          <View style={style1.flexAlign}>
            <Text style={style1.text}></Text>
          </View>
        </View>
        <View style={style1.flexMb8}>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose1}
              className={`rounded-md ${
                choose?.includes(1) ? `border-orange-400` : `border-gray-400`
              }`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                className={`${
                  choose?.includes(1) ? `text-orange-400` : `text-gray-400`
                }`}
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Sản phẩm rất tuyệt vời
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose2}
              className={`rounded-md ${
                choose?.includes(2) ? `border-orange-400` : `border-gray-400`
              }`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                className={`${
                  choose?.includes(2) ? `text-orange-400` : `text-gray-400`
                }`}
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Đóng gói chắn chắn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style1.flex}>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose3}
              className={`rounded-md ${
                choose?.includes(3) ? `border-orange-400` : `border-gray-400`
              }`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                className={`${
                  choose?.includes(3) ? `text-orange-400` : `text-gray-400`
                }`}
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Thời gian giao hàng nhanh
              </Text>
            </TouchableOpacity>
          </View>
          <View style={style1.w160}>
            <TouchableOpacity
              onPress={setChoose4}
              className={`rounded-md ${
                choose?.includes(4) ? `border-orange-400` : `border-gray-400`
              }`}
              style={{
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                paddingLeft: 11,
                paddingRight: 13,
              }}>
              <Text
                className={`${
                  choose?.includes(4) ? `text-orange-400` : `text-gray-400`
                }`}
                style={{
                  fontWeight: '400',
                  fontSize: 14,
                  lineHeight: 18,
                  textAlign: 'center',
                }}>
                Đóng gói chắn chắn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={style1.boxLine}>
          <View style={style1.line} />
          <View style={style1.line} />
        </View> */}
        <View>
          <View style={style1.flexColRe}>
            <BtnOrder content={'Hoàn thành'} onPress={onReview}></BtnOrder>
          </View>
        </View>
      </View>
      <ModalCancel modalVisible={modalVisible} setModalVisible={toggleModal} />
    </SafeAreaView>
  );
};
const style1 = StyleSheet.create({
  flexColRe: {flexDirection: 'column-reverse', marginTop: 170},
  line: {flex: 1, height: 1, backgroundColor: whiteGrey},
  boxLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  w160: {width: 160},
  flex: {flexDirection: 'row', justifyContent: 'space-between'},
  flexMb8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  text: {
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
  yourReview: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: darkerGrey,
    marginTop: 45,
    marginBottom: 13,
  },
  star: {width: 48, height: 48},
  mr5: {marginRight: 5},
  alignSelfItem: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  mt10: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textProduct: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '500',
    color: black,
  },
  row: {
    marginTop: 0,
    flexDirection: 'row',
  },
  boxProduct: {
    // backgroundColor: white,
    paddingBottom: 30,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 30,
    width: '100%',
  },
  titleP: {
    marginLeft: 24,
    marginTop: 9,
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: anotherGrey,
  },
});
export default Review;
