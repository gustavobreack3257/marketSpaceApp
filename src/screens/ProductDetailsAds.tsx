import { Header } from "@components/Header";
import { ProductCard } from "@components/ProductCard";

import ProductPNG from "@assets/Product.png";
import { Center, Text, VStack, View } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function ProductDetailsAds() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack(){
    navigation.goBack()
  }
  return (
    <VStack flex={1} bg="gray.700">
      <View px="6" mb="3">
        <Header onClickGoBack={handleGoBack}/>
      </View>

      <ProductCard source={ProductPNG} />
    </VStack>
  );
}
