import { HomeHeader } from '@components/HomeHeader'
import { HomeBody } from '@components/HomeBody'
import { ProductsCard } from '@components/ProductsCard'

import { HStack, VStack} from 'native-base'

import { Group } from '@components/Group'
export function Home(){
    return(

        <VStack flex={1} bg='#EDECEE'>
            <HomeHeader/>

            <HomeBody/>
            <Group />
        <HStack >
            <ProductsCard/>
        </HStack>

        </VStack>




    )
}