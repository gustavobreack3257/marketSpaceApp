import { Header } from "@components/Header";
import { ProductCard } from "@components/ProductCard";

import ProductPNG from "@assets/Product.png";
import { Center, Text, VStack, View } from "native-base";
import React from "react";

export function ProductDetails() {
  return (
    <VStack flex={1} bg="gray.700">
      <View px="6" mb="3">
        <Header />
      </View>

      <ProductCard source={ProductPNG} showDetails />
    </VStack>
  );
}
