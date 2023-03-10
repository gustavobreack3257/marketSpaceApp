import { Center, Heading, HStack, Text, VStack, Icon, View } from "native-base"

import { UserPhoto } from "./UserPhoto"

import { appNavigatorRoutesProps } from "@routes/app.routes"
import { Button } from "@components/Button"
import ImageProfile from '@assets/Profile.png'

import { useNavigation } from "@react-navigation/native"


export function HomeHeader(){
    const navigation = useNavigation<appNavigatorRoutesProps>();

    function handleSubmit(){
        navigation.navigate('my_ads')
    }
    return(
        <Center>
        <HStack  pt={16} pb={5} mr='1' mt='6' >
            <UserPhoto size={16}
            alt='Imagem do usuário'
            source={{uri: 'https://github.com/gustavobreack3257.png'}}
            mr={4}
            mt={-3}
        />

        <VStack >
            <Text fontSize='sm' >Boas vindas,</Text>
            <Heading fontSize='md' fontFamily='heading'>Gustavo</Heading>
        </VStack>

            <Button title='Criar anúncio'
            w={139}
            fontSize='md'
            px={0}
            mt={0}
            ml='10'
            bg='black'
            onPress={handleSubmit}
            />
            </HStack>

        </Center>


    )
}