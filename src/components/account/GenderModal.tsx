import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {colors} from '../../assets/colors';

interface Props {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<any>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const GenderModal: React.FC<Props> = (props: Props) => {
  const {modalVisible, setModalVisible, value, setValue} = props;

  const hideModal = () => {
    setModalVisible(false);
  };

  const onChangeText = (newValue: string) => {
    setValue(newValue);
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
          <View className="flex-row items-center justify-between px-3 py-5">
            <Text className="text-xl text-black">Giới tính</Text>
            <TouchableOpacity onPress={hideModal}>
              <FontAwesomeIcon icon={faClose} size={20} />
            </TouchableOpacity>
          </View>

          <RadioButton.Group
            onValueChange={newValue => onChangeText(newValue)}
            value={value}>
            <View className="flex-row items-center">
              <RadioButton.Android value="Nam" color={colors.primary} />
              <Text>Nam</Text>
            </View>
            <View className="flex-row items-center">
              <RadioButton.Android value="Nữ" color={colors.primary} />
              <Text>Nữ</Text>
            </View>
            <View className="flex-row items-center">
              <RadioButton.Android value="Khác" color={colors.primary} />
              <Text>Khác</Text>
            </View>
          </RadioButton.Group>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default GenderModal;
