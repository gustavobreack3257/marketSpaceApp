import { Center, HStack, Heading, Text, View, useTheme } from "native-base";

import { ArrowLeft, Plus, PencilSimpleLine } from "phosphor-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  showMyAds?: boolean;
  showAdCreationAndEditing?: boolean;
  iconVariant?: boolean;
  title?: string;
};
export function Header({
  showMyAds,
  iconVariant,
  showAdCreationAndEditing,
  title,
  ...rest
}: Props) {
  const { colors } = useTheme();
  return (
    <View h="6" w="full" mt="16">
      {showMyAds ? (
        <HStack w="full" justifyContent="flex-end">
          <Heading w="64" textAlign="center" fontFamily="heading" fontSize="xl">
            {title}
          </Heading>

          <TouchableOpacity style={{ marginTop: 2, marginLeft: 8 }} {...rest}>
            <Plus size={24} weight="regular" color={colors.gray[100]} />
          </TouchableOpacity>
        </HStack>
      ) : iconVariant ? (
        <HStack justifyContent="space-between">
          <TouchableOpacity {...rest}>
            <ArrowLeft size={24} weight="regular" color={colors.gray[100]} />
          </TouchableOpacity>

          <TouchableOpacity {...rest}>
            <PencilSimpleLine
              size={24}
              weight="regular"
              color={colors.gray[100]}
            />
          </TouchableOpacity>
        </HStack>
      ) : showAdCreationAndEditing ? (
        <HStack w="full" justifyContent="flex-start">
          <TouchableOpacity style={{ marginLeft: 8 }} {...rest}>
            <ArrowLeft size={24} weight="regular" color={colors.gray[100]} />
          </TouchableOpacity>

          <Heading w="64" textAlign="center" fontFamily="heading" fontSize="xl">
            {title}
          </Heading>
        </HStack>
      ) : (
        <TouchableOpacity {...rest}>
          <ArrowLeft size={24} weight="regular" color={colors.gray[100]} />
        </TouchableOpacity>
      )}
    </View>
  );
}
