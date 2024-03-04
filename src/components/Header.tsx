import { Center, HStack, Heading, Text, View, useTheme } from "native-base";

import { ArrowLeft, Plus, PencilSimpleLine } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  showMyAds?: boolean;
  showAdCreationAndEditing?: boolean;
  iconVariant?: boolean;
  title?: string;
  onClickCreatedAd?: () => void;
  onClickGoBack?: () => void;
  onClickEditAd?: () => void;

};
export function Header({
  showMyAds,
  iconVariant,
  showAdCreationAndEditing,
  title,
  onClickCreatedAd,
  onClickGoBack,
  onClickEditAd,
  ...rest
}: Props) {
  const { colors } = useTheme();
  return (
    <View h="6" w="full" mt="12">
      {showMyAds ? (
        <HStack w="full" justifyContent="flex-end">
          <Heading w="64" textAlign="center" fontFamily="heading" fontSize="xl">
            {title}
          </Heading>

          <TouchableOpacity onPress={onClickCreatedAd} style={{ marginTop: 2, marginLeft: 8 }} {...rest}>
            <Plus size={24} weight="regular" color={colors.gray[100]} />
          </TouchableOpacity>
        </HStack>
      ) : iconVariant ? (
        <HStack justifyContent="space-between">
          <TouchableOpacity onPress={onClickGoBack} {...rest}>
            <ArrowLeft size={24} weight="regular" color={colors.gray[100]} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onClickEditAd} {...rest}>
            <PencilSimpleLine
              size={24}
              weight="regular"
              color={colors.gray[100]}
            />
          </TouchableOpacity>
        </HStack>
      ) : showAdCreationAndEditing ? (
        <HStack w="full" justifyContent="flex-start">
          <TouchableOpacity onPress={onClickGoBack} style={{ marginLeft: 8 }} {...rest}>
            <ArrowLeft size={24} weight="regular" color={colors.gray[100]} />
          </TouchableOpacity>

          <Heading w="64" textAlign="center" fontFamily="heading" fontSize="xl">
            {title}
          </Heading>
        </HStack>
      ) : (
        <TouchableOpacity onPress={onClickGoBack} {...rest}>
          <ArrowLeft size={24} weight="regular" color={colors.gray[100]} />
        </TouchableOpacity>
      )}
    </View>
  );
}
