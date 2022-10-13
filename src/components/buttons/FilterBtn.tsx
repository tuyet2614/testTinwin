import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { filter_icon } from '../../assets/images';
import { white } from '../../constant/const';
import { NAVIGATE_FILTER } from '../../navigation/navigate';

interface Props {
    color?: string
}
const FilterBtn: React.FC<Props> = (props) => {
    const navigation = useNavigation();
    const { color } = props

    const navigateFilter = () => {
        navigation.navigate(NAVIGATE_FILTER);
    };

    return (
        <View className="">
            <TouchableOpacity
                onPress={navigateFilter}
                className={`border border-gray-200 justify-center px-4 py-3 ml-3 rounded-lg`}>

                <Image source={filter_icon} style={{ tintColor: color }} />
            </TouchableOpacity>
        </View>
    );
};

export default FilterBtn;
