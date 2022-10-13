import { FlatList, ImageSourcePropType, Text, View } from 'react-native';
import InfoDetailShop from './InfoDetailShop';
import HomeTitle from '../home/HomeTitle';

interface Props {
    data: object,
    title: string;
    icon: ImageSourcePropType;
    // data: object[]
}

const ShopDetailContainer: React.FC<Props> = (props) => {
    const { data, } = props
    const renderItem = ({ item }) => (
        <InfoDetailShop
            title={item.title}
            value={item.value} />
    )

    return (
        <View>
            <HomeTitle title={props.title} icon={props.icon} />
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>


        </View>
    );
};

export default ShopDetailContainer;
