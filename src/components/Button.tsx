import {Button as ButtonNativeBase, IButtonProps, Text} from 'native-base'

type Props = IButtonProps & {
    title: String;
    variant?: 'solid' | 'outline';
}
export function Button({title, variant = 'solid', ...rest}: Props){
    return(
        <ButtonNativeBase
        w='279'
        h={42}
        px={12}
        mt='10'
        bg={variant === 'outline' ? 'gray.100' : '#647AC7'}
        rounded='md'
        _pressed={{
            bg: variant === 'outline' ? '#647AC7' : 'green.500'
        }}
        {...rest}
        >
        <Text
        color={variant === 'outline' ? '#647AC7': "white"}
        fontFamily='heading'
        fontSize='sm'>
            {title}
        </Text>
        </ButtonNativeBase>
    )
}