import {Text, Center, HStack, Heading, Image, VStack, Box, View} from 'native-base'
import imageProfile from '@assets/Image.png'
import { SafeAreaView } from 'react-native'
import { Button } from '@components/Button'

import AdsIcon from '@assets/ads.svg'

export function Home(){
    return(
        <SafeAreaView>
        <Center mt={5} >
        <HStack>
            <Image source={imageProfile}
            alt='logo do perfil'
            mt={10}
            height={45}
            width={50}/>

            <Heading mt={10} size='sm'>Boas vindas{'\n'} Mariana</Heading>

            <Button title='Criar anuncio'
            bg='black'
            width={140}
            ml={70}
            />
        </HStack>
        </Center>

        <VStack>
        <Center>
        <Text mt={101} mr={85} ml={2} color='gray.300'>Seus produtos anunciados para venda</Text>
        <Box bg='#DFE1EA' height={66} width={327}
        borderRadius={6} mt={3}>

        <HStack mt={5} ml={5}>
        <AdsIcon />
        <Text mt={3} ml={5} color='gray.300'>anúncios ativos</Text>
        <Heading size='xs' color='#364D9D' ml={3}>Meus anúncios</Heading>
        </HStack>

        </Box>
        </Center>
        </VStack>

        </SafeAreaView>




    )
}