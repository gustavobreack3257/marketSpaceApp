import {
  HStack,
  Text,
  VStack,
  Select,
  FormControl,
  CheckIcon,
  Box,
  useTheme,
  FlatList,
} from "native-base";
import React, { useState } from "react";
import { Platform } from "react-native";

import { CaretDown, CaretUp } from "phosphor-react-native";
import ProductPNG from "@assets/Product.png";
import ProductBikeSVG from "@assets/ProductBike.svg";
import ProductLuminSVG from "@assets/ProductLumin.svg";


import { Header } from "@components/Header";
import { ProductCard } from "@components/ProductCard";
export function MyAds() {
  const { colors } = useTheme();

  const [productStatus, setProductStatus] = useState("");
  const [ads, setAds] = useState([
    {'name': 'Tênis', 'price': '50.00', 'picture': ProductPNG},
    {'name': 'peça', 'price': '50.00', 'picture': ProductPNG},
    {'name': 'mola', 'price': '50.00', 'picture': ProductPNG},
    {'name': 'bike', 'price': '50.00', 'picture': ProductPNG},
    {'name': 'moto', 'price': '50.00', 'picture': ProductPNG},
    {'name': 'patins', 'price': '50.00', 'picture': ProductPNG},


  ]);
  return (
    <VStack px="6" mt={Platform.OS === "ios" ? "9" : "0"}>
      <Header showMyAds iconVariant title="Meus anúncios" />

      <HStack mt="10" justifyContent="space-between" mb='6'>
        <Text mt="2"> 9 anúncios</Text>

        <Box maxW="300">
          <Select
            selectedValue={productStatus}
            h='9'
            width="30"
            accessibilityLabel="Todos"
            _selectedItem={{
              bg: "blue.200",
              startIcon: <CheckIcon size="5" color={colors.gray[700]} />,
            }}
            fontFamily='body'
            fontSize='sm'
            color='gray.100'
            defaultValue={productStatus}
            onValueChange={(itemValue) => setProductStatus(itemValue)}
            dropdownIcon={
              <CaretDown
                color={colors.gray[300]}
                style={{ marginRight: 12 }}
                size={16}
              />
            }
            dropdownOpenIcon={
              <CaretUp
                color={colors.gray[300]}
                style={{ marginRight: 12 }}
                size={16}
              />
            }
          >
            <Select.Item label="Todos" value="todos" />
            <Select.Item label="Novo" value="novo" />
            <Select.Item label="Usado" value="usado" />
          </Select>
        </Box>
      </HStack>


      <FlatList
      data={ads}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <ProductCard showDetails name={item.name} price={item.price} picture={item.picture} />
      )}
      numColumns={2}

      />

    </VStack>
  );
}
