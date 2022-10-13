import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddressScreen from '../screens/account/AddressScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import Splash from '../screens/Splash';
import TabBar from './TabBar';
import AddNewAddressScreen from '../screens/account/AddNewAddressScreen';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen';
import RatingScreen from '../screens/ProductDetail/RatingScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import SearchResultScreen from '../screens/Search/SearchResultScreen';
import FilterScreen from '../screens/categories/FilterScreen';
import CartNavigator from '../screens/Cart/CartNavigator';
import UpdateInfoScreen from '../screens/account/UpdateInfoScreen';
import ShopDetailScreen from '../screens/Shop/ShopDetailScreen';
import OrderSuccess from '../screens/Payment/OrderSuccess';
import InternetBanking from '../screens/Payment/InternetBanking';
import Payment from '../screens/Payment/Payment';
import DebitCard from '../screens/Payment/DebitCard';
import DetailOrder from '../screens/StatusOrder/DetailOrder';
import Review from '../screens/StatusOrder/ReviewScreen';
import Login from '../screens/Authentication/Login';
import ForgotPassword from '../screens/Authentication/ForgotPassword';
import Register from '../screens/Authentication/Register';
import LoginWithSMS from '../screens/Authentication/LoginWithSMS';
import OTP from '../screens/Authentication/OTPAuthen';
import FormForgotPassword from '../screens/Authentication/FormResetPassword';
import FormRegister from '../screens/Authentication/FormRegister';
import Order from '../screens/StatusOrder/Order';
import DetailCategoriesScreen from '../screens/Shop/DetailCategoriesScreen';

const Stack = createNativeStackNavigator();

const Navigator: React.FC = () => {
  const screenOptions = {
    headerShown: false,
  };
  const options = ({ }) => ({
    headerShadowVisible: false,
    headerBackTitleVisible: false,
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={screenOptions}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={screenOptions}
        />
        <Stack.Screen name="Login" component={Login} options={screenOptions} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={options}
        />
        <Stack.Screen name="Register" component={Register} options={options} />
        <Stack.Screen
          name="LoginWithSMS"
          component={LoginWithSMS}
          options={options}
        />
        <Stack.Screen name="OTPAuthen" component={OTP} options={options} />
        <Stack.Screen
          name="FormResetPassword"
          component={FormForgotPassword}
          options={options}
        />
        <Stack.Screen name="TabBar" component={TabBar} options={screenOptions} />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={options}
        />
        <Stack.Screen
          name="InternetBanking"
          component={InternetBanking}
          options={options}
        />
        <Stack.Screen name="Payment" component={Payment} options={options} />
        <Stack.Screen
          name="DebitCard"
          component={DebitCard}
          options={options}
        />
        <Stack.Screen
          name="DetailOrder"
          component={DetailOrder}
          options={options}
        />
        <Stack.Screen name="Cart" component={Order} options={options} />
        <Stack.Screen
          name="FormRegister"
          component={FormRegister}
          options={options}
        />
        <Stack.Screen name="Review" component={Review} options={options} />
        <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResultScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Rating"
          component={RatingScreen}
          options={screenOptions}
        />
        <Stack.Screen

          name="AddNewAddress"
          component={AddNewAddressScreen} />
        <Stack.Screen
          name='ShopDetail'
          component={ShopDetailScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name='DetailCategories'
          component={DetailCategoriesScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="CartNavigator"
          component={CartNavigator}
          options={screenOptions}
        />
        <Stack.Screen
          name="UpdateInfo"
          component={UpdateInfoScreen}
          options={screenOptions}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
