import { Text, View } from 'react-native';

interface Props {
    title: string,
    value: string
}

const InfoDetailShop: React.FC<Props> = (props) => {
    const { title, value } = props
    return (

        <View className={`flex-row justify-between p-3 px-6`}>
            <Text className={`text-[#636366] text-base font-medium`}>{title}</Text>
            <Text className={`text-[#48484A] text-base font-normal max-w-[230px] text-right`}>{value ? value : 'Đang cập nhật'}</Text>
        </View>


    );
};

export default InfoDetailShop;