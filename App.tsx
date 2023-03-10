import { StatusBar } from 'react-native';
import {NativeBaseProvider} from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Createads } from '@screens/createAds';
import { Loading } from '@components/Loading';
import { THEME } from './src/themes';
import { Routes } from '@routes/index';
export default function App() {
  const [fontsloaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent/>

      {fontsloaded ? <Createads/> : <Loading/> }
    </NativeBaseProvider>
  );
}
