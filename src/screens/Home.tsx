import {
  VStack,
  View,
  Text,
  HStack,
  Heading,
  useTheme,
  ScrollView,
  Center,
} from "native-base";
import { TouchableOpacity } from "react-native";

import ProductPNG from "@assets/Product.png";

import {
  Tag,
  ArrowRight,

} from "phosphor-react-native";

import { HomeHeader } from "@components/HomeHeader";
import { Input } from "@components/Input";
import { ProductCard } from "@components/ProductCard";
import { Modal } from "@components/Modal";
import { useState } from "react";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorBottomTabRoutesProps, AppNavigatorRoutesProps } from "@routes/app.routes";
export function Home() {
  const { colors } = useTheme();

  const [isDialogVisible, setDialogVisible] = useState(false);

  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleCreateAds(){
    navigation.navigate('createAds');
  }

  function handleMyAds(){
    navigation.navigate('myAds');
  }

  function handleProductDetailsAds(){
    navigation.navigate('productDetails');
  }
  return (
    <VStack flex={1} bg="gray.600" px="6" pt="16">
      <HomeHeader name="Gustavo" onClick={handleCreateAds} />

      <Text mt="10" fontFamily="body" fontSize="sm" color="gray.300">
        Seus produtos anunciados para venda{" "}
      </Text>

      <TouchableOpacity onPress={handleMyAds}>
      <HStack h="17" w="full" bg="#DFE1EA" mt="3" borderRadius={8} px="5">
        <Tag
          weight="regular"
          size={20}
          color="#364D9D"
          style={{ marginTop: 24 }}
        />

        <VStack mt="3" ml="4" flex={1}>
          <Heading fontFamily="heading" fontSize="lg">
            4
          </Heading>

          <Text fontFamily="body" fontSize="xs" color="gray.200">
            anúncios ativos
          </Text>
        </VStack>

        <Heading fontFamily="heading" fontSize="xs" mt="6" color="blue.100">
          Meus anúncios
        </Heading>

        <ArrowRight
          weight="regular"
          size={16}
          color="#364D9D"
          style={{ marginTop: 24 }}
        />
      </HStack>
      </TouchableOpacity>

      <Text fontFamily="body" fontSize="sm" color="gray.300" mt="8">
        Compre produtos variados
      </Text>

        <Input showIsIcon='PRIMARY' placeholder="Buscar anúncio" onFilter={showDialog} />

      <Modal visible={isDialogVisible} isClose={hideDialog}/>

      <ScrollView mt="6">
        <ProductCard source={ProductPNG} profile showDetails name="Tênis vermelho" price="56,99" onClick={handleProductDetailsAds}/>
      </ScrollView>
    </VStack>
  );
}
