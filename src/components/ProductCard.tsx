import {
  Center,
  IImageProps,
  IPressableProps,
  Image,
  Pressable,
  ScrollView,
  VStack,
  Text,
  HStack,
  View,
} from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import ProfilePng from "@assets/Avatar.png";

import { ProductStatusMarking } from "@components/ProductStatusMarking";
import React from "react";

type Props = TouchableOpacityProps & IImageProps &
   {
    name?: string;
    price?: string;
    showDetails?: boolean;

  };
export function ProductCard({
  price,
  name,
  showDetails = false,
  ...rest
}: Props) {
  return (
    <>
      {showDetails ? (
          <VStack h="40" w="40" pb="16" >
          <TouchableOpacity >
            <Image
              alt="Produto cadastrado"
              h="24"
              w="full"
              borderRadius={6}
              position="absolute"
              {...rest}
            />

            <HStack
              justifyContent="space-between"
              h="24"
              w="full"
              px="1"
              py="1"
            >
              <Image
                source={ProfilePng}
                alt="Foto do perfil do anunciante"
                size={6}
                resizeMode="contain"
              />

              <ProductStatusMarking
                h="4"
                w="12"
                mt="1"
                title="Usado"
                selectingBackGroundColor="PRIMARY"
              />
            </HStack>

            <Text fontFamily="body" fontSize="sm" color="gray.200">
              {name}
            </Text>
            <Text fontFamily="heading" fontSize="md" color="gray.100">
              $ {price}
            </Text>
          </TouchableOpacity>
          </VStack>
      ) : (
        <View >
          <Image alt="Produto cadastrado" h="24" w="full"  {...rest} />
        </View>
      )}
    </>
  );
}
