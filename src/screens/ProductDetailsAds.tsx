import { Header } from "@components/Header";
import { ProductCard } from "@components/ProductCard";

import ProductPNG from "@assets/Product.png";
import ProfilePNG from "@assets/Avatar.png";

import {
  Center,
  FlatList,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  View,
  useTheme,
} from "native-base";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ProductStatusMarking } from "@components/ProductStatusMarking";
import { PaymentCheckBox } from "@components/PaymentCheckBox";
import { Button } from "@components/Button";

export function ProductDetailsAds() {
  const [paymentMethodIcons, setPaymentMethodIcons] = useState([
    "Boleto",
    "Pix",
    "Dinheiro",
    "Cartão de crédito",
    "Depósito bancário",
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const { sizes } = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <VStack flex={1} bg="gray.600">
      <View px="6" >
        <Header onClickGoBack={handleGoBack} />
      </View>

      <ProductCard h="64" w="full" mt='3' source={ProductPNG} />

      <View mt="6" w="full" h="98" px="6">
        <HStack>
          <Image
            source={ProfilePNG}
            alt="Imagem do usuário"
            h="6"
            w="6"
            mr="2"
          />

          <Text fontFamily="body" fontSize="sm" color="gray.100">
            Gustavo costa souza
          </Text>
        </HStack>

        <ProductStatusMarking
          fontSize={10}
          title="novo"
          color="gray.200"
          h="5"
          w="12"
          mt="6"
        />

        <HStack mt="2" alignItems="flex-end">
          <Heading flex={1} fontFamily="heading" fontSize="lg" color="gray.100">
            Tênis
          </Heading>

          <Heading fontFamily="heading" fontSize="md" color="blue.200">
            R${" "}
          </Heading>

          <Heading fontFamily="heading" fontSize="lg" color="blue.200">
            200,00
          </Heading>
        </HStack>

        <Text mt="3" fontFamily="body" fontSize="sm">
          Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
          Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
          nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis
          in aliquam.
        </Text>

        <HStack alignItems="flex-end" mb="4">
          <Text mr="2" mt="6" fontFamily="heading" fontSize="sm">
            Aceita troca?
          </Text>

          <Text>Sim</Text>
        </HStack>

        <Heading fontFamily="heading" fontSize="sm" color="gray.200" mb="2">
          Meio de pagamento:
        </Heading>

        <FlatList
          data={paymentMethodIcons}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <PaymentCheckBox
              iconVariant={
                item === "Boleto"
                  ? "TICKET"
                  : item === "Pix"
                  ? "PIX"
                  : item === "Dinheiro"
                  ? "MONEY"
                  : item === "Cartão de crédito"
                  ? "CREDITCARD"
                  : item === "Depósito bancário"
                  ? "BANKDEPOSIT"
                  : "TICKET"
              }
              title={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          maxH="33"
        />
      </View>

      <HStack h="32" w="full" mt="6" bg="gray.700" px="6" pt='5'>
        <HStack flex={1} mt='2'>
        <Heading mt='1' fontFamily="heading" fontSize="md" color="blue.200">
          R${" "}
        </Heading>

        <Heading  fontFamily="heading" fontSize="lg" color="blue.200">
          200,00
        </Heading>
        </HStack>

        <Button showIcon iconVariation="PRIMARY" bgColor='PRIMARY' w='40' h='10' mt='0' title="Entrar em contato"/>
      </HStack>
    </VStack>
  );
}
