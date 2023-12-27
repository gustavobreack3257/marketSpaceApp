import { VStack, Center, Heading, Text } from "native-base";

import { Input } from "@components/Input";

import LogSvg from "@assets/Log.svg";
export function Login() {
  return (
    <VStack
      backgroundColor={"gray.600"}
      height="5/6"
      w="full"
      px="12"
      borderBottomLeftRadius={24}
      borderBottomRightRadius={24}
    >
      <Center mt="32">
        <LogSvg />
        <Heading fontFamily="heading" color="gray.100" fontSize="xy" mt="7">
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

      <Input placeholder="E-mail"  />

      <Input placeholder='Senha' showIsPassword/>
    </VStack>
  );
}
