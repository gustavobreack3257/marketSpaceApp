import {useTheme} from 'native-base'
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { Platform} from 'react-native'

import HomeIcon from '@assets/home.svg'
import AdsIcon from '@assets/ads.svg'
import ExitIcon from '@assets/exit.svg'


import { Home } from '@screens/Home'
import { MyAds } from '@screens/MyAds'
import {Login} from '@screens/Login'
import { useState } from 'react'

type appConfigProps = {
    press?: boolean;
}

type appRoutes = {
    home: undefined;
    my_ads: undefined;
    products: {productsId: string};
    exit: undefined;
}

export type appNavigatorRoutesProps = BottomTabNavigationProp<appRoutes>;

const {Navigator, Screen} = createBottomTabNavigator<appRoutes>()

export function AppRoutes({press = false}: appConfigProps){
    const {sizes, colors} = useTheme();
    const [isPressed, setIsPressed] = useState(true);

    const IconSize = sizes[6]

    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.gray[300],
            tabBarInactiveTintColor: colors.black,
            tabBarStyle: {
                backgroundColor: '#F7F7F8',
                borderTopWidth: 0,
                height: Platform.OS === 'android' ? 'auto': 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6]
            }

        }}>

            <Screen
            name='home'
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <HomeIcon fill={color} width={IconSize} height={IconSize}/>
                )
            }}/>



            <Screen
            name='my_ads'
            component={MyAds}
            options={{
                tabBarIcon: ({ color }) => (
                        <AdsIcon fill={color} width={IconSize} height={IconSize}/>
                )
            }}/>

            <Screen
            name='exit'
            component={Login}
            options={{
                tabBarIcon: ({color}) => (
                        <ExitIcon fill={color} width={IconSize} height={IconSize}/>

                )
            }}
            />

        </Navigator>
    )
}