import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text, View, Image } from 'react-native';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import Stars from 'react-native-stars';
import { orangeLight } from '../../constant/const';


interface Props {

    title: string;
    value: string;
    rating: number
}

const IntroductDetailShop: React.FC<Props> = (props: Props) => {
    const { title, value, rating } = props;


    return (
        <View >
            <Text className={`text-base text-white uppercase font-semibold`}>{title}</Text>
            <Text className={`text-[#FC832D] font-semibold text-sm`}>{value} Sản phẩm</Text>
            <View className={`flex-row`}>
                <Stars
                    default={rating}
                    count={5}
                    half={true}
                    starSize={50}
                    disabled
                    fullStar={
                        <FontAwesomeIcon icon={faStar} color={orangeLight} />
                    }
                    emptyStar={
                        <FontAwesomeIcon icon={faStarEmpty} color={orangeLight} />
                    }
                    halfStar={
                        <FontAwesomeIcon icon={faStarHalfStroke} color={orangeLight} />
                    }
                />


                <Text className={`text-[#FEB336]`}>{rating}</Text>
            </View>

        </View>
    );
};

export default IntroductDetailShop;
