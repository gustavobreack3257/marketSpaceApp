import {VStack, Center, Image} from 'native-base'

import LogSvg from '@assets/Log.svg'
export function Login(){
    return(
        <VStack backgroundColor={'gray.600'} h={44} w='full' >
            <Center mt={112}>
                <LogSvg/>

            </Center>
        </VStack>
    )
}