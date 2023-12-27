import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Text, View } from "native-base";
import { StyleSheet } from "react-native";

import {Karla_400Regular, Karla_700Bold, useFonts} from '@expo-google-fonts/karla'

import { THEME } from "./src/theme";

import { Login } from "@screens/Login";

export default function App() {
  const [fontsLoaded] = useFonts({Karla_400Regular, Karla_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <View >
        {fontsLoaded ? <Login/> : []}
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}


