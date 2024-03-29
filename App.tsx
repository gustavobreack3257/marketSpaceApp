import { StatusBar } from "expo-status-bar";

import React from "react";
import { NativeBaseProvider, Text, View } from "native-base";
import { StyleSheet } from "react-native";

import {Karla_400Regular, Karla_700Bold, useFonts} from '@expo-google-fonts/karla'

import { THEME } from "./src/theme";

import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { Routes } from "./src/routes";
import { ProductDetails } from "@screens/ProductDetails";
import { Home } from "@screens/Home";


export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
        {fontsLoaded ? <Routes/> : []}
        <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


