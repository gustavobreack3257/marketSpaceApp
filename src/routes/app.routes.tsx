import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"


import { CreateAds } from "@screens/CreateAds";
import { DetailsOfMyAds } from "@screens/DetailsOfMyAds";
import { EditAds } from "@screens/EditAds";
import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";
import React from "react";
type AppRoutesParamProps = {
    home: undefined;
    createAds: undefined;
    editAds: undefined;
    myAds: undefined;
    detailsOfMyAds: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutesParamProps>

const {Navigator, Screen} = createNativeStackNavigator<AppRoutesParamProps>();
export function AppRoutes(){
    return(
        <Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>

            <Screen name="createAds" component={CreateAds}/>

            <Screen name="editAds" component={EditAds}/>

            <Screen name="myAds" component={MyAds}/>

            <Screen name="detailsOfMyAds" component={DetailsOfMyAds}/>
        </Navigator>
    )
}