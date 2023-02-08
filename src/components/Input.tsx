import {Input as NativeBaseInput, IInputProps, FormControl, Center, HStack, View} from 'native-base'
import { TouchableOpacity } from 'react-native';

import { Image } from 'native-base';
import Eye from '@assets/eye.svg'
import EyeSlash from '@assets/eye-slash.svg'
import { useState } from 'react';

type Props = IInputProps & {
    errorMessage?: string | null;
    isPasswoard?: boolean;
}
export function Input({errorMessage = null, isPasswoard = false,  isInvalid, ...rest}: Props){
    const invalid = !!errorMessage || isInvalid

    const [showPasswoard, setShowPasswoard] = useState(true)
    return(
        <Center >
        <FormControl isInvalid={invalid}>
            <NativeBaseInput
            bg='white'
            height={45}
            width={279}
            px={4}
            mt={34}
            borderWidth={0}
            borderRadius={6}
            fontSize='md'
            color='gray.500'
            placeholderTextColor='gray.200'
            isInvalid={invalid}
            secureTextEntry={showPasswoard}
            _invalid={{
                borderWidth: 1,
                borderColor: 'red.500'
            }}
            _focus={{
                bg: 'blue.50',
                borderWidth: 1,
                borderColor: 'green.500'
            }}
            {...rest}
            />

            {isPasswoard && (
            <Center ml='52%' mt={-6} >
            <TouchableOpacity onPress={() => setShowPasswoard(prevState => !prevState)} >
            {showPasswoard ? <Eye width={20} height={20} />: <EyeSlash width={20} height={20}/>}
            </TouchableOpacity>
            </Center>

            )}



            <FormControl.ErrorMessage _text={{color: 'red.500'}} marginTop={5}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
        </Center>


    )
}