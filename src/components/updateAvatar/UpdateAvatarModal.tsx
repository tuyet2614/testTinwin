import {Dispatch, SetStateAction} from 'react';
import {Alert, Modal, SafeAreaView, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import tw from 'tailwind-react-native-classnames';
import useUploadAvatar from '../../hooks/user/useUploadAvatar';
import ModalBtn from './ModalBtn';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const UpdateAvatarModal: React.FC<Props> = (props: Props) => {
  const {modalVisible, setModalVisible, setValue} = props;

  const {upload} = useUploadAvatar();

  const onLaunchImageLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel != true) {
          // setValue({uri: response.assets[0].uri});
          upload(response.assets[0].uri);
          setModalVisible(false);
        }
      },
    );
  };

  const onLaunchCamera = () => {
    launchCamera(
      {
        cameraType: 'back',
        saveToPhotos: true,
      },
      response => {
        if (response.errorCode !== undefined) {
          Alert.alert(response.errorCode);
        } else if (response.didCancel != true) {
          setValue({uri: response.assets[0].uri});
          setModalVisible(false);
        }
      },
    );
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity
          className={`flex-1 bg-black-opacity`}
          onPress={hideModal}
        />
        <View
          className={`bg-white justify-end pb-20 shadow-xl rounded-t-lg pt-5`}>
          <ModalBtn
            textColor="white"
            color="orange-400"
            text="Chọn ảnh từ thư viện"
            onPress={onLaunchImageLibrary}
          />
          <ModalBtn
            textColor="white"
            color="orange-400"
            text="Chụp ảnh"
            onPress={onLaunchCamera}
          />
          <ModalBtn
            textColor="orange-400"
            color="gray-100"
            text="Thoát"
            onPress={hideModal}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UpdateAvatarModal;
