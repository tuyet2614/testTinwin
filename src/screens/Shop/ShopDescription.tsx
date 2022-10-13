
import { SafeAreaView, Text, View, Image, ScrollView, Linking, StyleSheet } from 'react-native';
import ShopDetailContainer from '../../components/ShopDetail/ShopDetailContainer';
import ProductsContainer from '../../components/product/ProductsContainer';
// import { data } from '../../Data/Data';
import { outstanding_icon, panel_icon } from '../../assets/images';
import { getProductOfShop } from '../../hooks/shops/useGetShops';
import { linkKing } from '../../constant/const';



interface Props {
    id: string
    shop: object
    productData: object
}

const ShopDescription: React.FC<Props> = (props) => {
    const { id, shop, productData } = props


    let newProduct: [] = []
    Array.isArray(productData)
        ? productData.map(item => item.retailerTotalQuantity > 0 ? newProduct.push(item) : '') : ''

    const item = [
        { id: 1, title: 'Công ty', value: shop.nameCompany },
        { id: 2, title: 'Địa chỉ', value: `${shop.address}, ${shop.wardName}, ${shop.districtName}, ${shop.provinceName}`, },
        { id: 3, title: 'Mã số thuế', value: shop.taxCode },
        { id: 4, title: 'Số điện thoại', value: shop.phoneNumber },
        { id: 5, title: 'Email', value: shop.email },
        { id: 6, title: 'Link website', value: <Text style={styles.website} onPress={() => Linking.openURL('http://google.com')}>{shop.websiteUrl}</Text> }
    ]
    return (
        <ScrollView nestedScrollEnabled={true} className="bg-white flex-1">

            <View>
                <ShopDetailContainer
                    title="Mô tả gian hàng"
                    icon={require('../../images/intro.png')}
                    data={item}
                />
            </View>
            <View className='items-center flex'>
                <Image source={panel_icon} />
            </View>

            <View>
                <ProductsContainer
                    flatlistStyle={{ justifyContent: 'space-evenly' }}
                    textBtn="Xem tất cả"
                    data={newProduct}
                    title="Sản phẩm mới"
                    icon={outstanding_icon}
                />
            </View>


        </ScrollView>
    );
};

export default ShopDescription;

const styles = StyleSheet.create({
    website: {
        color: linkKing
    }
})

