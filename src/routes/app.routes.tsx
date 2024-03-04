import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { House } from "phosphor-react-native";
import HouseSVG from "@assets/House.svg";
import AdsSVG from "@assets/Ads.svg";
import ExitSVG from "@assets/SignOut.svg";

import { CreateAds } from "@screens/CreateAds";
import { DetailsOfMyAds } from "@screens/DetailsOfMyAds";
import { EditAds } from "@screens/EditAds";
import { Home } from "@screens/Home";
import { MyAds } from "@screens/MyAds";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { AuthRoute } from "./auth.routes";
import { ProductDetailsAds } from "@screens/ProductDetailsAds";

type AppRoutesParamProps = {
  bottomTabNavigation: undefined;
  createAds: undefined;
  editAds: undefined;
  myAds: undefined;
  detailsOfMyAds: undefined;
  productDetails: undefined;
};

type AppRoutesParamBottomTabProps = {
  home: undefined;
  myAds: undefined;
  exit: undefined;
};

export type AppNavigatorRoutesProps =
  NativeStackNavigationProp<AppRoutesParamProps>;

export type AppNavigatorBottomTabRoutesProps =
  BottomTabNavigationProp<AppRoutesParamBottomTabProps>;

const Stack = createNativeStackNavigator<AppRoutesParamProps>();

const Tab = createBottomTabNavigator<AppRoutesParamBottomTabProps>();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  function BottomTabNavigation() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.blue[200],
          tabBarInactiveTintColor: colors.gray[100],
          tabBarStyle: {
            backgroundColor: colors.gray[700],
            paddingTop: sizes[6],
            height: sizes[24],
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <HouseSVG fill={color} />,
          }}
        />

        <Tab.Screen
          name="myAds"
          component={MyAds}
          options={{
            tabBarIcon: ({}) => <AdsSVG />,
          }}
        />

        <Tab.Screen
          name="exit"
          component={AuthRoute}
          options={{
            tabBarIcon: ({ color }) => <ExitSVG fill={color} />,
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="bottomTabNavigation"
        component={BottomTabNavigation}
      />

      <Stack.Screen name="createAds" component={CreateAds} />

      <Stack.Screen name="editAds" component={EditAds} />

      <Stack.Screen name="detailsOfMyAds" component={DetailsOfMyAds} />

      <Stack.Screen name="productDetails" component={ProductDetailsAds} />

      <Stack.Screen name="myAds" component={MyAds} />
    </Stack.Navigator>
  );
}
