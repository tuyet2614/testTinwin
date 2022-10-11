import {
  faApple,
  faFacebook,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  anotherOrange,
  black,
  blueGrey,
  darkBlue,
  darkGrey,
  grey,
  lightGrey,
  moreLightGrey,
  orangeDark,
  orangeLight,
  red,
  white,
} from '../../constant/const';
import {login} from '../../redux/authentication/actions';
import {getAuth} from '../../redux/authentication/selectors';
import {clearUser, getUser} from '../../redux/dataUser/actions';
import {getUserSelector} from '../../redux/dataUser/selectors';
import {
  isVietnamesePhoneNumber,
  validateEmail,
  validatePass,
} from '../../Ultis/commons';
import ModalAuthen from './ModalAuthen';
import {style} from './style';

const Login: React.FC = ({}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(true);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [securityUsername, setSecurityUsername] = useState<boolean>();
  const [securityPassword, setSecurityPassword] = useState<boolean>();
  const dispatch = useDispatch();
  const data = useSelector(getAuth);
  const user = useSelector(getUserSelector);
  useEffect(() => {
    if (user.currentUser) {
      navigation.navigate('TabBar');
    }
  }, [navigation, user]);
  useEffect(() => {
    Keyboard.dismiss();
    dispatch(getUser());
  }, []);

  const setUser = (text: string) => {
    setUserName(text);
  };
  const setPass = (text: string) => {
    setPassword(text);
  };
  const setPassSecu = () => {
    setIsPasswordSecure(!isPasswordSecure);
  };
  const navigate = () => {
    navigation.navigate('ForgotPassword');
  };
  const navigateLoginSMS = () => {
    navigation.navigate('LoginSMS');
  };
  const navigateTabBar = () => {
    navigation.navigate('TabBar');
  };
  const navigateRegister = () => {
    navigation.navigate('Register');
  };
  const loginDefault = async () => {
    if (userName === '') {
      setSecurityUsername(false);
      return;
    } else {
      if (!validateEmail(userName) && !isVietnamesePhoneNumber(userName)) {
        setSecurityUsername(false);
        return;
      }
    }
    setSecurityUsername(true);
    if (password === '') {
      setSecurityPassword(false);
      return;
    }
    if (!validatePass(password)) {
      setSecurityPassword(false);
      return;
    }
    setSecurityPassword(true);

    dispatch(
      login({
        client_id: 'Mobile_Retailer',
        client_secret: '1q2w3E*',
        grant_type: 'password',
        username: userName,
        password: password,
      }),
    );
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    if (!token) {
      setVisible(false);
      return;
    }
    navigateTabBar();
  };
  return (
    <ScrollView>
      <SafeAreaView style={style.container}>
        <View>
          <Image
            source={require('../../assets/logoTinwinPrimary.png')}
            style={style.image}></Image>
          <View style={style.boxTextWelcome}>
            <Text style={style.textWelcome}>
              Chào mừng bạn đến với{' '}
              <Text style={style.textPrimary}>Tinwin.</Text>
            </Text>
          </View>
        </View>
        <View style={style.loginView}>
          <View style={style1.mb20}>
            <Text style={style.textDescription}>Email / Số điện thoại</Text>
            <TextInput
              style={{
                flex: 1,
                minHeight: 50,
                borderColor: securityUsername === false ? red : grey,
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
                borderStyle: 'solid',
                color: grey,
              }}
              value={userName}
              placeholder="Nhập Email / Số điện thoại"
              onChangeText={setUser}
              placeholderTextColor={lightGrey}
            />
            <Text
              className={`text-[12px] text-red-500 ${
                securityUsername === false ? 'flex' : 'hidden'
              }`}>
              Định dạng Email/Số điện thoại không đúng
            </Text>
          </View>
          <View>
            <Text style={style.textDescription}>Mật khẩu</Text>
            <TextInput
              style={{
                flex: 1,
                minHeight: 50,
                borderColor: securityPassword === false ? red : grey,
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
                borderStyle: 'solid',
                color: grey,
              }}
              placeholder="Nhập mật khẩu"
              autoCapitalize="none"
              value={password}
              secureTextEntry={isPasswordSecure}
              onChangeText={setPass}
              placeholderTextColor={lightGrey}
            />
            <View style={style1.boxForgot}>
              <TouchableOpacity
                onPressIn={setPassSecu}
                onPressOut={setPassSecu}>
                <FontAwesomeIcon icon={faEyeSlash} size={20} color={grey} />
              </TouchableOpacity>
              <Text style={style1.grey}> | </Text>
              <TouchableOpacity onPress={navigate}>
                <Text style={style.textForgot}>Quên ?</Text>
              </TouchableOpacity>
            </View>
            <Text
              className={`text-[12px] text-red-500 ${
                securityPassword === false ? 'flex' : 'hidden'
              } mb-[10px]`}>
              Định dạng password không đúng
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={navigateLoginSMS}>
            <Text style={style.textSMS} className="self-end mr-4">
              Đăng nhập bằng sms
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style1.mt40mb31}>
          <LinearGradient
            className={`rounded-md`}
            colors={[orangeLight, orangeDark]}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            locations={[0, 1]}
            style={style1.btnLogin}>
            <TouchableOpacity className="p-3" onPress={loginDefault}>
              <Text style={style1.textLogin}>Đăng nhập</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={style1.rowCenter}>
          <View style={style1.tripleIcon} />
          <View>
            <Text style={style1.continue}>Hoặc tiếp tục với</Text>
          </View>
          <View style={style1.tripleIcon} />
        </View>
        <View style={style1.loginWith}>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faFacebook} color={blueGrey} size={55} />
          </TouchableOpacity>
          <FontAwesomeIcon icon={faGooglePlus} color={darkBlue} size={55} />
          <FontAwesomeIcon icon={faApple} color={black} size={55} />
        </View>
        <View style={style1.boxRegister}>
          <Text style={style1.textRegister}>Bạn mới biết đến tinwin? </Text>
          <TouchableOpacity className="" onPress={navigateRegister}>
            <Text style={style1.registerPrimary}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ModalAuthen
        modalVisible={visible}
        setModalVisible={setVisible}
        content={data?.errorMsg}
      />
    </ScrollView>
  );
};
const style1 = StyleSheet.create({
  textLogin: {
    color: white,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22,
  },
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  loginWith: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    alignSelf: 'center',
    marginTop: 30,
  },
  boxRegister: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
    flexDirection: 'row',
  },
  textRegister: {
    color: grey,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 18,
  },
  registerPrimary: {color: anotherOrange},
  btnLogin: {alignItems: 'center', height: 50},
  boxForgot: {
    position: 'absolute',
    right: 20,
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  grey: {color: grey},
  mb20: {marginBottom: 20},
  mt40mb31: {marginTop: 40, marginBottom: 31},
  tripleIcon: {flex: 1, height: 1, backgroundColor: moreLightGrey},
  continue: {width: 130, textAlign: 'center', color: darkGrey},
});
export default Login;
