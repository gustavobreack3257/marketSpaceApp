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

type Props = IImageProps &
  TouchableOpacityProps & {
    name: string;
    price: string;
  };
export function ProductCard({ price, name, ...rest }: Props) {
  return (
    <VStack h="40" w="40" pb="16">
      <TouchableOpacity>
        <Image
          alt="Produto cadastrado"
          h="24"
          w="full"
          position="absolute"
          {...rest}
        />

        <HStack justifyContent="space-between" h="24" w="full" px="1" py="1">
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
  );
}
