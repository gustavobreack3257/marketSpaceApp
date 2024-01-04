import { Center, IImageProps, IPressableProps, Image, Pressable, ScrollView, VStack, Text } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";


type Props = IImageProps & TouchableOpacityProps &{
    name: string;
    price: string;
}
export function ProductCard({price, name ,...rest}: Props){
    return(
           <VStack>
            <TouchableOpacity>
            <Image
            alt="Produto cadastrado"
            h='24'
            w='40'
            {...rest}
            />
            </TouchableOpacity>

            <Text fontFamily='body' fontSize='sm' color='gray.200'>{name}</Text>
            <Text fontFamily='heading' fontSize='md' color='gray.100'>$ {price}</Text>
           </VStack>
    )
}