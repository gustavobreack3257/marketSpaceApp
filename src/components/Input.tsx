import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Eye, EyeSlash, MagnifyingGlass, Sliders } from "phosphor-react-native";

import {
  Center,
  Input as NativeBaseInput,
  IInputProps,
  View,
  HStack,
  Text,
  useTheme,
} from "native-base";

type Props = IInputProps & TouchableOpacityProps &{
  showIsPassword?: boolean;
  showIsIcon: "PRIMARY" | "SECONDARY";
  onSearch?: () => void;
  onFilter: () => void;
};

export function Input({ showIsPassword = false, showIsIcon, onSearch, onFilter, ...rest }: Props) {
  const [closeIsPassword, setCloseIsPassword] = useState(false);

  const { colors } = useTheme();
  return (
    <Center>
      {showIsPassword ? (
        <HStack
          backgroundColor="gray.700"
          w="full"
          h="12"
          mt="4"
          rounded={6}
          pr="4"
        >
          <NativeBaseInput
            flex={1}
            h="12"
            borderWidth="0"
            fontFamily="body"
            fontSize="md"
            color="gray.400"
            px="4"
            secureTextEntry={!closeIsPassword}
            {...rest}
          />

          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setCloseIsPassword((prevState) => !prevState)}
          >
            <Center borderBottomRightRadius={6} borderTopRightRadius={6} h="12">
              {closeIsPassword ? (
                <EyeSlash color={colors.gray[300]} weight="regular" size={20} />
              ) : (
                <Eye color={colors.gray[300]} weight="regular" size={20} />
              )}
            </Center>
          </TouchableOpacity>
        </HStack>
      ) : showIsIcon === "PRIMARY" ? (
        <HStack
          backgroundColor="gray.700"
          w="full"
          h="12"
          mt="4"
          rounded={6}
          pr="4"
        >
          <NativeBaseInput
            flex={1}
            h="12"
            borderWidth="0"
            fontFamily="body"
            fontSize="md"
            color="gray.400"
            px="4"
            secureTextEntry={!closeIsPassword}
            {...rest}
          />

          <TouchableOpacity onPress={onSearch}>
            <MagnifyingGlass
              weight="regular"
              size={20}
              color={colors.gray[200]}
              style={{ marginTop: 14 }}
            />
          </TouchableOpacity>
          <Text mt="2" fontSize="lg" mx="1" color="gray.400">
            {" "}
            |{" "}
          </Text>

          <TouchableOpacity onPress={onFilter}>
            <Sliders
              weight="regular"
              size={20}
              color={colors.gray[200]}
              style={{ marginTop: 14 }}
            />
          </TouchableOpacity>
        </HStack>
      ) : (
        <NativeBaseInput
          backgroundColor="gray.700"
          h="12"
          w="full"
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
