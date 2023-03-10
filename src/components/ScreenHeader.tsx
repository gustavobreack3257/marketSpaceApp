import { HStack, Heading, Center, View } from "native-base";

import { Ionicons } from '@expo/vector-icons'

type Props = {
    title: string;
}
export function ScreenHeader({title}: Props){
    return(

            <HStack pt={20} px='8'>
                <Heading ml='30%' mr={70} color='#1A181B' fontFamily='heading' fontSize='xl'>
                    {title}
                </Heading>

                <Center mt={-1} >
                    <Ionicons name="add-outline" color='#000' size={32}/>
                </Center>

            </HStack>

    )
}