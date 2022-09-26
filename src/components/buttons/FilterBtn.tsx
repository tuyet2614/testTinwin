import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import {
    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import BtnBorder from '../BtnBorder';
import BtnPrimary from '../BtnPrimary';
import CloseBtn from './CloseBtn';

const FilterBtn: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className={`border-2 border-gray-200 justify-center p-4 ml-3 rounded-lg`}>
                <Image source={require('../../assets/icons/filter.png')} />
            </TouchableOpacity>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View className="flex-1 bg-white p-3">
                    <View className="flex-row items-center justify-between">
                        <Text className="text-lg font-bold text-black">
                            Bộ lọc tìm kiếm
                        </Text>
                        <CloseBtn onPress={() => setModalVisible(false)} />
                    </View>

                    <ScrollView className="flex-1"></ScrollView>
                    <View className="flex-row">
                        <BtnBorder
                            text="Thiết lập lại"
                            style="p-3 flex-1 items-center mr-3"
                        />
                        <BtnPrimary
                            text="Áp dụng"
                            style="justify-center px-16 items-center flex-1"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default FilterBtn;
