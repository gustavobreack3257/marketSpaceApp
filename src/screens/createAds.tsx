import { Center, Heading, HStack, Text, View } from "native-base"
import {Feather} from '@expo/vector-icons'
import { SafeAreaView } from "react-native"

export function Createads(){
    return(
        <HStack mt={65} ml='12'>
            <Feather name='arrow-left' size={24}/>

            <Center ml='20'>
                <Heading fontSize='xl' fontFamily='heading' >Criar anúncio</Heading>
            </Center>
        </HStack>

    )
}