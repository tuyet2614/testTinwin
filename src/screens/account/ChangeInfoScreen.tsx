import {faPen} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import {colors} from '../../assets/colors';
import AccountContainer from '../../components/account/AccountContainer';
import GenderModal from '../../components/account/GenderModal';
import HeaderStack from '../../components/HeaderStack';
import UpdateAvatarModal from '../../components/updateAvatar/UpdateAvatarModal';
import useUpdateInfo from '../../hooks/useUpdateInfo';
import {NAVIGATE_UPDATE_INFO} from '../../navigation/navigate';
import {getUserState} from '../../redux/user/selectors';

const ChangeInfoScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const userInfo = useSelector(getUserState);

  const navigation = useNavigation();

  const [showModalGender, setShowModalGender] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const [date, setDate] = useState(new Date());

  const [avatar, setAvatar] = useState();
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    setAvatar(userInfo.avatar);
    setName(userInfo.name);
    setGender(userInfo.gender);
    setDob(userInfo.dob);
    setPhone(userInfo.phoneNumber);
    setEmail(userInfo.email);
  }, []);

  const showModal = () => {
    setModalVisible(true);
  };

  const onCancel = () => {
    setShowDatePicker(false);
  };

  const onConfirm = (date: any) => {
    setShowDatePicker(false);
    setDob(date.toLocaleDateString('vi-VN'));
  };

  const navigateUpdateInfo = (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    id: number,
  ) => {
    navigation.navigate(NAVIGATE_UPDATE_INFO, {
      value: value,
      setValue: setValue,
      id: id,
    });
  };

  const {dispatchUpdateInfo} = useUpdateInfo();
  const updateInfo = () => {
    dispatchUpdateInfo({
      id: '1',
      name: name,
      gender: gender,
      dob: dob,
      email: email,
      phoneNumber: phone,
      avatar: avatar,
    });
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <HeaderStack
        text="Sửa hồ sơ"
        isGoback={true}
        textBtnRight="Lưu"
        onPress={updateInfo}
      />

      <TouchableOpacity
        className="relative items-center my-5"
        onPress={showModal}>
        <Image className="h-44 w-44 rounded-full bg-cover" source={avatar} />
        <View className="absolute items-center items-center justify-center h-full">
          <FontAwesomeIcon icon={faPen} color={colors.primary} />
          <Text className="text-orange-400 text-xs mt-3">Chạm để thay đổi</Text>
        </View>
      </TouchableOpacity>

      <AccountContainer
        items={[
          {
            id: 1,
            text: 'Tên hiển thị',
            icon: require('../../assets/icons/changeInfo/account.png'),
            textRight: name,
            onPress: () => navigateUpdateInfo(name, setName, 1),
          },
          {
            id: 2,
            text: 'Giới tính',
            icon: require('../../assets/icons/changeInfo/gender.png'),
            textRight: gender,
            onPress: () => setShowModalGender(true),
          },
          {
            id: 3,
            text: 'Ngày sinh',
            icon: require('../../assets/icons/changeInfo/dob.png'),
            textRight: dob,
            onPress: () => setShowDatePicker(true),
          },
          {
            id: 4,
            text: 'Điện thoại',
            icon: require('../../assets/icons/changeInfo/phone.png'),
            textRight: phone,
            onPress: () => navigateUpdateInfo(phone, setPhone, 4),
          },
          {
            id: 5,
            text: 'Email',
            icon: require('../../assets/icons/changeInfo/email.png'),
            textRight: email,
            onPress: () => navigateUpdateInfo(email, setEmail, 5),
          },
        ]}
      />

      <View>
        <View className="h-2 bg-gray-100"></View>
        <AccountContainer
          items={[
            {
              text: 'Thay đổi mật khẩu',
              icon: require('../../assets/icons/changeInfo/lock.png'),
            },
          ]}
        />
      </View>

      <UpdateAvatarModal
        setValue={setAvatar}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <DatePicker
        modal
        mode="date"
        open={showDatePicker}
        date={date}
        onConfirm={date => onConfirm(date)}
        onCancel={onCancel}
      />

      <GenderModal
        setValue={setGender}
        value={gender}
        modalVisible={showModalGender}
        setModalVisible={setShowModalGender}
      />
    </SafeAreaView>
  );
};

export default ChangeInfoScreen;
