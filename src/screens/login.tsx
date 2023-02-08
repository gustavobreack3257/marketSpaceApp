import { useState } from 'react'

import { VStack, Image, Center, Text, Heading, View, useToast} from 'native-base'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import {useForm, Controller} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useNavigation } from '@react-navigation/native'

import imageLog from '@assets/log.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { AppError } from '@utils/AppError'

type FormValidProps = {
    email: string;
    password: string;
}

const loginSchema = yup.object({
    email: yup.string().required('Informe o email!').email('Formato de email invalido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve conter 6 dígitos')
})

export function Login(){
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const {control, handleSubmit, formState: {errors}} = useForm<FormValidProps>({
        resolver: yupResolver(loginSchema)
    })

    const toast = useToast()

    function registerNewAccount(){
        navigation.navigate('register')
    }

    async function handleLogin({email, password}: FormValidProps){
        try {
            setIsLoading(true)
        } catch (error) {
            const isAppError = error instanceof AppError

            const title = isAppError ? error.message: 'Não foi possível logar, tente novamente mais tarde'

            setIsLoading(false)

            toast.show({
                title,
                placement:'top',
                bgColor: 'red.500'
            })
        }
    }

    return(
        <VStack  h='70%' rounded={24} bgColor='#EDECEE'>
            <SafeAreaView >
            <Center marginTop={65}>
            <Image source={imageLog}
            alt='logo do app'
            />
            <Heading fontSize='big'>marketSpace</Heading>
            <Text fontSize='sm' fontFamily='body' color='gray.300'>Seu espaço de compra e venda</Text>
            </Center>

            <Center>
            <Heading mt='20' fontSize='sm' color='gray.300'>Acessar a conta</Heading>
            <Controller
                control={control}
                name='email'
                render={({ field: {onChange, value} }) => (
                <Input
                placeholder='E-mail'
                keyboardType='email-address'
                mb={-2}
                autoCapitalize='none'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
            />
            )}
            />


            <Controller
            control={control}
            name='password'
            render={({ field: {onChange, value} }) => (
            <Input
            mb={-2}
            placeholder='Senha'
            isPasswoard
            autoCapitalize='none'
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}
            />
            )}
            />


            <Button title='Acessar'
            onPress={handleSubmit(handleLogin)}/>
            </Center>

            <Center>
                <Text mt='24' fontSize='sm' fontFamily='body' color='gray.500' mb={-8}>Ainda não tem acesso?</Text>

                <Button
                title='Criar uma conta'
                variant={'outline'}
                onPress={registerNewAccount}/>
            </Center>
            </SafeAreaView>



        </VStack>

    )
}