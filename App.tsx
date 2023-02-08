import { StatusBar } from 'react-native';
import {NativeBaseProvider} from 'native-base'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Login } from '@screens/login';
import { Loading } from '@components/Loading';
import { THEME } from './src/themes';
import { Register } from '@screens/Register';
import { Routes } from '@routes/index';
import { Home } from '@screens/Home';
export default function App() {
  const [fontsloaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
      barStyle='dark-content'
      backgroundColor='transparent'
      translucent/>

      {fontsloaded ? <Routes/> : <Loading/> }
    </NativeBaseProvider>
  );
}
