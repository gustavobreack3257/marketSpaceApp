import { Center, HStack, Text, VStack} from "native-base"
import { ScreenHeader } from "@components/ScreenHeader"
export function MyAds(){
    return(
        <Center>
            <VStack>
                <ScreenHeader title="Meus anúncios" />

                <HStack px='8' mt='12' justifyContent='space-between'>
                    <Text>9 anúncios</Text>

                </HStack>
            </VStack>

        </Center>

    )
}