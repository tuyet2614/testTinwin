import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  anotherOrange,
  black,
  borderBeige,
  borderColorWhiteBeige,
  colorForInput,
  colorOpacity,
  colorTextTitleNotifi,
  grey,
  white,
} from '../../constant/const';
import BtnOrder from '../buttons/BtnOrder';
import {RadioButton} from '../buttons/RadioButton';
import {useDispatch, useSelector} from 'react-redux';
import {getOrderSelector} from '../../redux/order/selectors';
import {useState} from 'react';
import {cancelOrder} from '../../redux/order/actions';
interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
  item: object;
}

const ModalCancel: React.FC<Props> = (props: Props) => {
  const {modalVisible, setModalVisible, item} = props;
  const [reasonId, setReasonId] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const order = useSelector(getOrderSelector);
  const dispatch = useDispatch();

  const reverseModal = () => {
    setModalVisible(!modalVisible);
  };
  const onCancel = () => {
    dispatch(
      cancelOrder({
        orderId: item.id,
        reason: {reasonId: reasonId, reason: reason},
      }),
    );
  };
  const changeReason = (text: string) => {
    setReason(text);
  };
  const renderReason = item => {
    return (
      <TouchableOpacity
        style={styles1.flexMt19}
        key={item.id}
        onPress={() => {
          setReasonId(item.id);
        }}>
        <RadioButton selected={reasonId === item.id ? true : false} />
        <Text style={styles1.textChange}>{item.reasonName}</Text>
      </TouchableOpacity>
    );
  };
  if (!order.reasonCancel) {
    return;
  }
  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          style={styles1.bgColor}
          className={`flex-1 `}
          onPress={reverseModal}></TouchableOpacity>
        <View style={styles1.centeredView} className={`justify-end`}>
          <View style={styles1.modalView}>
            <ScrollView>
              <View style={styles1.flexBetween}>
                <Text style={styles1.reasonCancel}>Chọn lí do hủy</Text>
                <TouchableOpacity onPress={reverseModal}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={14}
                    color={black}></FontAwesomeIcon>
                </TouchableOpacity>
              </View>
              <View style={styles1.boxWarning}>
                <Image
                  source={require('../../assets/order/warning.png')}
                  style={styles1.imgWarning}
                />
                <Text style={styles1.textChoose}>
                  Vui lòng chọn lý do huỷ. Với lý do này, bạn sẽ huỷ tất cả sản
                  phẩm trong đơn hàng và không thể thay đổi sau đó
                </Text>
              </View>
              {order?.reasonCancel?.map(item => renderReason(item))}

              <TextInput
                style={styles1.input}
                // value={userName}
                placeholder="Nhập lí do cụ thể ở đây"
                // onChange={text => setUserName(text)}
                numberOfLines={4}
                multiline={true}
                onChangeText={changeReason}
              />
              <BtnOrder content={'Hoàn thành'} onPress={onCancel}></BtnOrder>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles1 = StyleSheet.create({
  flexBetween: {flexDirection: 'row', justifyContent: 'space-between'},
  centeredView: {backgroundColor: colorOpacity},
  modalView: {
    // margin: 20,
    backgroundColor: white,
    // borderRadius: 20,
    padding: 28,
    // alignItems: 'center',
    shadowColor: black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
    width: '100%',
    height: '90%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: white,
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
    color: grey,
  },
  textChange: {
    marginLeft: 9,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  flexMt19: {
    marginTop: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  anotherReason: {
    marginLeft: 9,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  textChangeIdea: {
    marginLeft: 9,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 22,
    color: colorTextTitleNotifi,
  },
  textChoose: {
    marginLeft: 13,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: anotherOrange,
    marginRight: 40,
  },
  imgWarning: {width: 24, height: 24},
  boxWarning: {
    //   flex: 1,
    borderWidth: 1,
    borderColor: borderBeige,
    height: 78,
    backgroundColor: borderColorWhiteBeige,
    paddingBottom: 11,
    paddingTop: 11,
    paddingLeft: 14,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reasonCancel: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 20,
    color: black,
    marginBottom: 20,
  },
  bgColor: {backgroundColor: colorOpacity},
});

export default ModalCancel;
