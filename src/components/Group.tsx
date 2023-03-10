import { Center ,Heading, HStack, Text } from "native-base";
import React from "react";
import { Input } from "./Input";

import {AntDesign, Feather} from '@expo/vector-icons'

export function Group(){
    return(
        <Center >
            <Input mt={0} bg='#F7F7F8' w={327} h={45} borderRadius={6} borderWidth={0}/>

        <HStack mt={-8} mb='10' ml='56'>
            <AntDesign size={20} name='search1'/>
            <Text fontSize={30} mt={-4} color='gray.200'> | </Text>

            <Feather size={20} name='sliders'/>
        </HStack>

        </Center>
    )

}