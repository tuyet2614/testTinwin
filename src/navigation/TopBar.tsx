
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';

import HotSale from '../screens/Filter/HotSale';
import Name from '../screens/Filter/Name';
import Price from '../screens/Filter/Price';


interface Props {
    title: object[]
}

const TopBar: React.FC<Props> = (props) => {
    const Tab = createMaterialTopTabNavigator();
    const { title } = props

    const screenOptions = ({ route }) => ({


        tabBarIndicatorStyle: {
            backgroundColor: '#FC832D',
            height: 3,
            color: '#FC832D',

            marginRight: 10
        },
        tabBarActiveTintColor: '#FC832D',
        tabBarInactiveTintColor: '#636366',

        tabBarStyle: {
            color: '#FC832D',
            backgroundColor: 'white',
            marginRight: 6,
            marginLeft: 6,
        },


    });

    return (
        <SafeAreaView className={`flex-1 h-`}>


            <Tab.Navigator screenOptions={screenOptions}>
                {
                    title.map(item => <Tab.Screen name={item.name} component={item.component} />)
                }

            </Tab.Navigator>


        </SafeAreaView>

    );
};

export default TopBar;
