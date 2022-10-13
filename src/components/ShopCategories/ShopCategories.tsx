import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { SafeAreaView, Text, Image, View, TouchableOpacity, StyleSheet, FlatList, ListRenderItem, ScrollView } from 'react-native';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Categories } from '../../assets/Data';
import { useNavigation } from '@react-navigation/native';
import CategoryItem from './CategoryItem';
import { NAVIGATE_DETAIL_CATEGORIES } from '../../navigation/navigate';

interface Props {
    data: object[]
    shopId: string
}
const ShopCaregories: React.FC<Props> = (props) => {
    const { data, shopId } = props
    console.log('shopId check: ', shopId)
    const navigation = useNavigation()
    const onPressRoute = (id?: string) => {
        navigation.navigate(NAVIGATE_DETAIL_CATEGORIES, { shopId: shopId, id: id, })
    }
    const renderItem = ({ item }) => {
        return (

            <CategoryItem title={item.name} id={item.id} image={item.avatar} onPress={() => onPressRoute(item.id)} />
        )
    }
    return (
        <View className={`mt-6`}>
            <FlatList data={data} renderItem={renderItem} />
            <View>
                <CategoryItem title={"Tất cả sản phẩm"} id={'1'} onPress={() => onPressRoute()} />
            </View>
        </View>

    )
}

export default ShopCaregories