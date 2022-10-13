import { SafeAreaView, Text } from 'react-native';
import CategoriesContainer from '../../components/categories/CategoriesContainer';
import ShopCaregories from '../../components/ShopCategories/ShopCategories';
import { getCategoriesOfShop } from '../../hooks/shops/useGetShops';

interface Props {
    id: string
    shop: object
}

const CategoriesOfShop: React.FC<Props> = (props) => {
    const { id, shop } = props
    const data = getCategoriesOfShop(id)

    return (
        <SafeAreaView className={`bg-white flex-1`}>
            <ShopCaregories data={data} shopId={id} />
        </SafeAreaView>
    );
};

export default CategoriesOfShop;
