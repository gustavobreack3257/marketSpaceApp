import { VStack, Center, Heading, Text, View } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogSvg from "@assets/Log.svg";
import React from "react";

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewRegister() {
    navigation.navigate("register");
  }
  return (
    <VStack bg='gray.700' h='full' w='full'>
      <View
        flex={1}
        backgroundColor="gray.600"
        px='12'
        w="full"
        borderBottomLeftRadius={24}
        borderBottomRightRadius={24}
      >
        <Center mt="24">
          <LogSvg />
          <Heading fontFamily="heading" color="gray.100" fontSize="xy" mt={4}>
            marketspace
          </Heading>

          <Text color="gray.300" fontSize="sm" fontFamily="body">
            {" "}
            Seu espaço de compra e venda
          </Text>
        </Center>

        <Center mt="20">
          <Text fontFamily="body" fontSize="sm" color="gray.200">
            Acesse sua conta
          </Text>
        </Center>

        <Input placeholder="E-mail" />

        <Input placeholder="Senha" showIsPassword />

        <Center mt="8">
          <Button title="Entrar" bgColor="PRIMARY" />
        </Center>
      </View>

      <Center mt="20" bg='gray.700' mb='20'>
        <Text fontFamily="body" fontSize="sm" color="gray.200">
          Ainda não tem acesso?
        </Text>

        <Button
          title="Criar uma conta"
          variant="outline"
          mt="4"
          onPress={handleNewRegister}
        />
      </Center>
    </VStack>
  );
}
