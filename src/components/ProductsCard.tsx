import { Heading, Image, VStack, Text, Center } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

export function ProductsCard(){
    return(
        <TouchableOpacity>
            <VStack>

            <Image
            source={{uri: 'https://static.dafiti.com.br/p/Evoltenn-T%C3%AAnis-Masculino-Evoltenn-Easy-Style-Preto-Amarelo-1382-3414617-1-zoom.jpg'}}
            alt='imagem do produto'
            h={100}
            w={153}
            ml='12'
            rounded={6}
            />


            <Heading  ml='12' color='gray.300' fontSize='sm'>Tênis preto</Heading>


            <Text ml='12' fontFamily='heading' fontSize='md'>R$ 59,90</Text>
            </VStack>

            <UserPhoto
            size={7}
            alt='Imagem do usuario'
            source={{uri: 'https://github.com/gustavobreack3257.png'}}
            ml='12'
            mt={-138}

            />

        </TouchableOpacity>
    )
}