import {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Text, View, Modal} from 'react-native';
import useShowNotification from '../../hooks/useShowNotification';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
}

const NotificationModal: React.FC = () => {
  const {notification, dispatchShowNotification} = useShowNotification();
  const {icon, text, visible} = notification;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible === undefined ? false : visible}>
      <View className="flex-1 items-center justify-center">
        <View className="items-center p-5 bg-black-opacity rounded-lg">
          <FontAwesomeIcon icon={icon} size={30} color="white" />
          <Text className="text-white font-bold mt-5">{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModal;
