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
import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from "react-native";

import ProfilePng from "@assets/Avatar.png";

import { ProductStatusMarking, backgroundColorSelectProps, nameStatusProductProps } from "@components/ProductStatusMarking";
import React from "react";

type Props = TouchableOpacityProps &
  IImageProps & {
    name: string;
    nameStatusProduct?: nameStatusProductProps;
    price: string;
    picture: ImageSourcePropType;
    showDetails?: boolean;
    profile?: boolean;
    backgroundSelectColor?: backgroundColorSelectProps;
    onClick?: () => void;
  };
export function ProductCard({
  price,
  name,
  picture,
  showDetails = false,
  profile,
  backgroundSelectColor,
  nameStatusProduct = 'NOVO',
  onClick,
  ...rest
}: Props) {
  return (
    <>
      {showDetails ? (
        <VStack h="46" w="46" pb="16" mr='3' >
          <TouchableOpacity onPress={onClick}>
            <Image
              alt="Produto cadastrado"
              h="30"
              w="full"
              borderRadius={6}
              position="absolute"
              source={picture}
              {...rest}
            />

            {profile ? (
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
                  title={nameStatusProduct}
                  selectingBackGroundColor={backgroundSelectColor}
                />
              </HStack>
            ) : (
              <View h="24" w="full" p="1" alignItems="flex-end">
                <ProductStatusMarking
                  h="4"
                  w="12"
                  mt="1"
                  title={nameStatusProduct}
                  selectingBackGroundColor={backgroundSelectColor}
                />
              </View>
            )}

            <Text fontFamily="body" fontSize="sm" mt='4' color="gray.200">
              {name}
            </Text>
            <Text fontFamily="heading" fontSize="md" color="gray.100">
              $ {price}
            </Text>
          </TouchableOpacity>
        </VStack>
      ) : (
        <View>
          <Image alt="Produto cadastrado" h="24" w="full" {...rest} />
        </View>
      )}
    </>
  );
}
