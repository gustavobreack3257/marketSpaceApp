import {
  VStack,
  View,
  Text,
  HStack,
  Heading,
  useTheme,
  ScrollView,
} from "native-base";

import { HomeHeader } from "@components/HomeHeader";

import ProductPNG from "@assets/Product.png";

import {
  Tag,
  ArrowRight,
  MagnifyingGlass,
  Sliders,
} from "phosphor-react-native";
import { Input } from "@components/Input";
import { TouchableOpacity } from "react-native";
import { ProductCard } from "@components/ProductCard";
export function Home() {
  const { colors } = useTheme();
  return (
    <VStack flex={1} bg="gray.600" px="6" pt="16">
      <HomeHeader name="Gustavo" />

      <Text mt="10" fontFamily="body" fontSize="sm" color="gray.300">
        Seus produtos anunciados para venda{" "}
      </Text>

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

      <Text fontFamily="body" fontSize="sm" color="gray.300" mt="8">
        Compre produtos variados
      </Text>

      <HStack bg="gray.700" h="12" mt="4" rounded={6}>
        <Input mt="0" placeholder="Buscar anúncio" />

        <TouchableOpacity>
          <MagnifyingGlass
            weight="regular"
            size={20}
            color={colors.gray[200]}
            style={{ marginTop: 14 }}
          />
        </TouchableOpacity>
        <Text mt="2" fontSize="lg" mx="1" color="gray.400">
          {" "}
          |{" "}
        </Text>

        <TouchableOpacity>
          <Sliders
            weight="regular"
            size={20}
            color={colors.gray[200]}
            style={{ marginTop: 14 }}
          />
        </TouchableOpacity>
      </HStack>

      <ScrollView mt="6">
        <ProductCard source={ProductPNG} name="Tênis vermelho" price="56,99" />
      </ScrollView>
    </VStack>
  );
}
