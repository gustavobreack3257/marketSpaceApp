import {AntDesign, Feather} from '@expo/vector-icons'

import { HStack, View, VStack, Text, Center, Heading, Input } from 'native-base'

export function HomeBody(){
    return(
        <VStack>
        <Center>
        <Text mr={88} mb='3' color='gray.300' mt={10}>Seus produtos anunciados para venda</Text>

        <View bg='#DFE1EA' borderRadius={6} w={327} h={66} justifyContent='space-between'>
            <HStack  p='5' mt='1'>
                <AntDesign name='tago' size={22} color='#364D9D' />

            <VStack ml='4' mt={-2}>
                <Heading fontSize='md' >4</Heading>
                    <Text fontSize='xs' color='gray.400'>anúncios ativos</Text>

            </VStack>
            <Heading fontSize='sm' mr='1' ml='16' color='#364D9D' mt='1'>Meus anúncios</Heading>

            <Center >
                <Feather name='arrow-right' color='#364D9D'/>
            </Center>

            </HStack>
        </View>
        </Center>

        <Center mt='16' mr='40' mb='3'>
            <Text color='gray.300' fontSize='sm'>Compre produtos variados</Text>
        </Center>


        </VStack>

    )
}