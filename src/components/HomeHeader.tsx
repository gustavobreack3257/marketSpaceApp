import { Center, HStack, Image, VStack, Text, Heading } from "native-base";

import ProfilePng from "@assets/Avatar.png";
import { Button } from "./Button";
import React from "react";

type Props = {
    name: string;
    onClick: () => void;
}
export function HomeHeader({name, onClick}: Props) {
  return (
    <Center>
      <HStack  >
        <Image
          source={ProfilePng}
          defaultSource={ProfilePng}
          alt="Imagem do perfil do usuário"
          size={45}
        />
        <VStack flex={1}  ml='2'>
        <Heading fontFamily="body" fontSize='md' color='gray.100' >Boas vindas,</Heading>

        <Text fontFamily='heading' fontSize='md' >{name}</Text>
        </VStack>

        <Button onPress={onClick} showIcon bgColor='SECONDARY' title="Criar anúncio"  w='33' h='10'/>
      </HStack>
    </Center>
  );
}
