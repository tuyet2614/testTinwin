import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { Rating } from 'react-native-ratings';

import { LOGO_TINWIN_PRIMARY } from '../assets/images';
import CartBtn from '../components/buttons/CartBtn';
import GoBackBtn from '../components/buttons/GoBackBtn';
import SearchBtn from '../components/buttons/SearchBtn';
import ProductDetailContainer from '../components/productDetail/ProductDetailContainer';
import ProductInfoContainer from '../components/productDetail/ProductInfoContainer';
import StallAccount from '../components/stall/StallAccount';
import { white } from '../constant/const';

const ProductDetailScreen: React.FC = () => {
  const route = useRoute();
  const { id } = route.params;

  const arr = [
    {
      id: 1,
      text: 'Thương hiệu',
      value: 'Xiaomi',
    },
    {
      id: 2,
      text: 'Thương hiệu',
      value: 'Xiaomi',
    },
    {
      id: 3,
      text: 'Thương hiệu',
      value: 'Xiaomi',
    },
    {
      id: 4,
      text: 'Thương hiệu',
      value: 'Xiaomi',
    },
  ];

  return (
    <SafeAreaView className="bg-white h-full">
      <View>
        <View className="flex-row justify-between p-5 absolute z-10 w-full">
          <GoBackBtn
            style="py-3 px-6 bg-black-opacity rounded-lg w-10 items-center justify-center"
            color={white}
          />
          <View className="flex-row">
            <SearchBtn
              style="py-3 px-6 bg-black-opacity rounded-lg w-10 items-center justify-center"
              color={white}
            />
            <CartBtn
              color={white}
              style="bg-black-opacity p-3 rounded-lg ml-3"
            />
          </View>
        </View>
        <Image
          source={LOGO_TINWIN_PRIMARY}
          className="w-full h-80 bg-blue-400"
        />
        <ProductInfoContainer />
        <StallAccount />
        <ProductDetailContainer
          arr={arr}
          icon={faInfoCircle}
          title="Thông tin chi tiết"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
