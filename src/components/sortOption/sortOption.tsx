import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useState } from 'react';
import ProductsContainer from '../product/ProductsContainer';
import { Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    data: object
    label: object[]
}

const SortOption: React.FC<Props> = (props) => {
    const { data, label } = props
    const [renderData, setRenderData] = useState(data)
    const [status, setStatus] = useState('Mới nhất')
    const setStatusFilter = (item: string) => {
        setStatus(item)
    }

    const getNewProduct = () => {
        if (status === 'Mới nhất') {
            let newProduct: [] = []
            Array.isArray(data)
                ? data.map(item => item.retailerTotalQuantity > 0 ? newProduct.push(item) : '') : ''

            setRenderData(newProduct)
        }
        else {
            setRenderData(data)
        }

    }

    return (
        <View>
            <View className={`flex-row px-6 mt-6`}>
                {label.map(item =>
                    <TouchableOpacity
                        className={`w-28 items-center ${item.style}`}
                        key={item.id}
                        onPress={() => { setStatusFilter(item.title), getNewProduct() }}>
                        <Text className={`${status === item.title ? 'text-[#FC832D]' : 'text-[#48484A]'}`}>{item.title}</Text>
                    </TouchableOpacity>)}
            </View>
            <View>
                <ProductsContainer
                    flatlistStyle={{ justifyContent: 'space-evenly' }}
                    data={renderData}

                />
            </View>
        </View>



    )
}

export default SortOption