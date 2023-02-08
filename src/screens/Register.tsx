import {VStack, Center, Image, Text, Heading, Box, View, useToast, ScrollView} from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TouchableOpacity } from 'react-native'
import { useState } from 'react'
import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Imagelog from '@assets/log.png'
import ImageView from '@assets/Search.png'
import imageProfile from '@assets/Image.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { AppError } from '@utils/AppError'

type FormDataProps = {
    name: string;
    email: string;
    phone: number;
    password: string;
    password_confirm: string;
}

const registerSchema = yup.object({
    name: yup.string().required('Informe seu nome.'),
    email: yup.string().required('Informe o email.').email('Email invalido!'),
    phone: yup.number().required('Informe seu número de telefone celular, com DD').min(12, 'Número invalido'),
    password: yup.string().required('Informe a senha').min(6, 'A senha deve conter no mínimo 6 dígitos'),
    password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password'), null], 'A confirmação de senha não confere')
})
export function Register(){
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation();

    const toast = useToast();

    const {control, handleSubmit, formState: {errors}} = useForm<FormDataProps>({
        resolver: yupResolver(registerSchema)
    })
    function screenGoBack(){
        navigation.goBack()
    };

    async function handleShow({name, email, phone, password}: FormDataProps){
        try {
            setIsLoading(true);
        } catch (error) {
            setIsLoading(false);

            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Não foi possível cadastrar, tente novamente mais tarde!'

            toast.show({
                title,
                placement: 'top',
                bg: 'red.500',
                marginTop: 20
            })
    }
}
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} bg='#EDECEE'>
        <SafeAreaView>
        <Center >
        <Image source={Imagelog}
        alt='log do app_Register'/>

        <Heading mt='4'>Boas vindas!</Heading>
        <Text color='gray.300' textAlign='center' mt={2}>Crie sua conta e use o espaço para comprar{'\n'} itens variados e vender seus produtos.</Text>
        </Center>

        <Center>
        <Image source={imageProfile}
        alt='logo do perfil'
        mt={8}
        mb={-4}/>

        <Controller
        control={control}
        name='name'
        render={({field: {onChange, value}}) => (
            <Input
            mb={-4}
            placeholder='Nome'
            onChangeText={onChange}
            value={value}
            errorMessage={errors.name?.message}/>
        )}/>

        <Controller
        control={control}
        name='email'
        render={({field: {onChange, value}}) => (
            <Input
            mb={-4}
            placeholder='E-mail'
            keyboardType='email-address'
            onChangeText={onChange}
            value={value}
            errorMessage={errors.email?.message}
            />
        )}/>

        <Controller
        control={control}
        name='phone'
        render={({field: {onChange, value}}) => (
            <Input
            mb={-4}
            placeholder='Telefone'
            keyboardType='numeric'
            onChangeText={onChange}
            errorMessage={errors.phone?.message}
            />
        )}/>

        <Controller
        control={control}
        name='password'
        render={({field: {onChange, value}}) => (
            <Input
            mb={-2}
            placeholder='Senha'
            secureTextEntry
            isPasswoard
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}/>
        )}/>

        <Controller
        control={control}
        name='password_confirm'
        render={({field: {onChange, value}}) => (
            <Input
            mb={-2}
            placeholder='Confirma a senha'
            isPasswoard
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password_confirm?.message}/>
        )}/>
        <View>

        </View>

        <Button title='Cadastrar'
        bg='#647AC7'
        onPress={handleSubmit(handleShow)}
        isLoading={isLoading}
        />
        </Center>

        <Center mt={5} >
            <Text color='gray.300'>Já tem uma conta?</Text>

            <Button title='Ir para login'
            mt='1'
            variant={'outline'}
            onPress={screenGoBack}/>
        </Center>
        </SafeAreaView>

        </VStack>
        </ScrollView>

    )
}