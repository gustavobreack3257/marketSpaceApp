import { VStack, Center, Heading, Text, View } from "native-base";

import { Input } from "@components/Input";

import LogSvg from "@assets/LogSmall.svg";
import AvatarSvg from "@assets/ProfileSvg.svg";

import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
export function Register() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <View h="full" w="full" backgroundColor={"gray.600"}>
      <VStack>
        <Center mt="16">
          <LogSvg />
          <Heading
            fontFamily="heading"
            color="gray.100"
            fontSize="xy"
            mt="4"
            mb="2"
          >
            Boas vindas!
          </Heading>

          <Text
            color="gray.200"
            fontSize="sm"
            fontFamily="body"
            textAlign="center"
            px="12"
          >
            {" "}
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>
        </Center>

        <Center mt="8" mb="2">
          <AvatarSvg />
        </Center>

        <Input placeholder="Nome" />

        <Input placeholder="E-mail" />

        <Input placeholder="Telefone" />

        <Input placeholder="Senha" showIsPassword />

        <Input placeholder="Confirmar Senha" showIsPassword />

        <Center mt="6">
          <Button title="Criar" bgColor="SECONDARY" />
        </Center>
      </VStack>

      <Center mt="12">
        <Text fontFamily="body" fontSize="sm" color="gray.200">
          {" "}
          Já tem uma conta?
        </Text>

        <Button
          title="Ir para o login"
          variant="outline"
          mt="4"
          onPress={handleGoBack}
        />
      </Center>
    </View>
  );
}
