import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ItemProduct} from '../../@types/apiReview';
import BtnOrder from '../../components/buttons/BtnOrder';
import {
  anotherOrange,
  black,
  colorForInput,
  darkestGrey,
  modalColor,
  modalColorBeige,
} from '../../constant/const';

export const ModalBuyAgain = (props: any) => {
  const {modalVisible, setModalVisible, item} = props;
  const reverseModal = () => {
    setModalVisible(!modalVisible);
  };
  const false1 = () => {
    setModalVisible(false);
  };
  const renderProduct = (itemProduct: ItemProduct) => {
    return (
      <View style={styles1.boxP} key={itemProduct.code}>
        <Image
          source={{uri: itemProduct.image[0]}}
          style={styles1.image}></Image>
        <View style={styles1.ml17}>
          <Text style={styles1.textP}>{itemProduct.productName}</Text>
          <View style={styles1.flexAlign}>
            <Text style={styles1.code}>Mã SP: {itemProduct.code}</Text>
            <Text style={styles1.x3}>x{itemProduct.quantity}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles1.bgColor}
          className={`flex-1 `}
          onPress={false1}></TouchableOpacity>
        {/* <View
          className={`bg-white  shadow-xl rounded-t-lg pt-5`}> */}
        <View style={styles1.centeredView} className={`justify-end`}>
          <View style={styles1.modalView}>
            <ScrollView>
              <View style={styles1.flex}>
                <Text style={styles1.textAddToCart}>Thêm vào giỏ hàng</Text>
                <TouchableOpacity onPress={reverseModal}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={14}
                    color={black}></FontAwesomeIcon>
                </TouchableOpacity>
              </View>
              {item?.orderDetails?.map((item1: ItemProduct) =>
                renderProduct(item1),
              )}

              {/* <View style={styles1.boxP}>
                <Image
                  source={require('../../assets/order/sting.png')}
                  blurRadius={9}
                  style={styles1.borderRa}></Image>
                <Image
                  source={require('../../assets/order/soldOut.png')}
                  style={styles1.imgSoldOut}></Image>
                <View style={styles1.ml17}>
                  <Text style={styles1.titlePSoldOut}>
                    Thùng 24 Chai Nước Giải Khát Sting Vàng (330ml/chai)
                  </Text>
                  <View style={styles1.flexAlign}>
                    <Text style={styles1.codeSoldOut}>Mã SP: ASSDF</Text>
                    <Text style={styles1.x3SoldOut}>x3</Text>
                  </View>
                </View>
              </View> */}
              <View style={styles1.mt42}>
                <BtnOrder content={'Đồng ý'} style={styles1.wh76}></BtnOrder>
              </View>
            </ScrollView>
          </View>
        </View>
        {/* </View> */}
      </Modal>
    </SafeAreaView>
  );
};
const styles1 = StyleSheet.create({
  x3: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: anotherOrange,
    marginLeft: 160,
  },
  code: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
  },
  textAddToCart: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: black,
  },
  textP: {
    marginRight: 70,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: darkestGrey,
  },
  boxP: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  codeSoldOut: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    color: modalColor,
  },
  x3SoldOut: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '500',
    color: modalColorBeige,
    marginRight: 70,
  },
  mt42: {marginTop: 42},
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginTop: 22,
    height: '00%',
    width: '100%',
    borderStyle: 'solid',
    backgroundColor: 'rgba(90, 90, 90, 0.7)',
    elevation: 20,
    // padding: 10,
    // borderRadius: 4,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 28,
    // alignItems: 'center',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    // width: 327,
    flex: 1,
    // alignItems: 'baseline',
    minHeight: 182,
    borderColor: colorForInput,
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 30,
    marginTop: 9,
  },
  wh76: {width: 76, height: 76},
  flexAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titlePSoldOut: {
    marginRight: 70,
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: modalColor,
  },
  ml17: {marginLeft: 17},
  borderRa: {borderRadius: 5},
  imgSoldOut: {position: 'absolute', top: 0},
  flex: {flexDirection: 'row', justifyContent: 'space-between'},
  bgColor: {backgroundColor: 'rgba(90, 90, 90, 0.7)'},
  image: {
    width: 76,
    height: 76,
  },
});
