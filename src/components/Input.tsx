import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Eye, EyeSlash } from "phosphor-react-native";

import {
  Center,
  Input as NativeBaseInput,
  IInputProps,
  View,
  HStack,
} from "native-base";

type Props = IInputProps & {
  showIsPassword?: boolean;

};

export function Input({ showIsPassword = false,  ...rest }: Props) {
  const [ closeIsPassword, setCloseIsPassword] = useState(false);
  return (
    <Center>
      {showIsPassword ? (
        <HStack>
          <NativeBaseInput
            backgroundColor="gray.700"
            h="12"
            w="64"
            rounded={6}
            borderWidth="0"
            fontFamily="body"
            fontSize="md"
            color="gray.400"
            px="4"
            mt="4"
            secureTextEntry={!closeIsPassword}
            {...rest}
          />

          <TouchableOpacity activeOpacity={0.9} onPress={() => setCloseIsPassword(prevState => !prevState)}>

          <Center backgroundColor="gray.700" mt="4" pr="4" h='12'
          borderBottomRightRadius={6} borderTopRightRadius={6}>
            { closeIsPassword ? <EyeSlash color="#5F5B62" weight="regular" size={20}/> : <Eye color="#5F5B62" weight="regular" size={20} />}
          </Center>

          </TouchableOpacity>

        </HStack>
      ) : (
        <NativeBaseInput
          backgroundColor="gray.700"
          h="12"
          w={296}
          rounded={6}
          borderWidth="0"
          fontFamily="body"
          fontSize="md"
          color="gray.400"
          px="4"
          mt="4"
          {...rest}
        />
      )}
    </Center>
  );
}
