import { Center, HStack, Image, VStack, Text, Heading } from "native-base";

import ProfilePng from "@assets/Avatar.png";
import { Button } from "./Button";

type Props = {
    name: string;
}
export function HomeHeader({name}: Props) {
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

        <Button showIcon bgColor='SECONDARY' title="Criar anúncio"  w='33' h='10'/>
      </HStack>
    </Center>
  );
}
