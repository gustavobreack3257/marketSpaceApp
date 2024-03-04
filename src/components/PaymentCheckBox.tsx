import {
  HStack,
  View,
  Text,
  Pressable,
  IPressableProps,
  useTheme,
} from "native-base";
import {
  CheckFat,
  Barcode,
  QrCode,
  Money,
  CreditCard,
  Bank,
} from "phosphor-react-native";
import React from "react";

type Props = IPressableProps & {
  title: string;
  isActive?: boolean;
  iconVariant?: "TICKET" | "PIX" | "MONEY" | "CREDITCARD" | "BANKDEPOSIT";
};

export function PaymentCheckBox({
  title,
  isActive,
  iconVariant,
  ...rest
}: Props) {
  const { colors } = useTheme();
  return (
    <HStack alignItems="center" mb="2">
      {iconVariant === "TICKET" ? (
        <Barcode size={18} weight="regular" color={colors.gray[100]} />
      ) : iconVariant === "PIX" ? (
        <QrCode size={18} weight="regular" color={colors.gray[100]} />
      ) : iconVariant === "MONEY" ? (
        <Money size={18} weight="regular" color={colors.gray[100]} />
      ) : iconVariant === "CREDITCARD" ? (
        <CreditCard size={18} weight="regular" color={colors.gray[100]} />
      ) : iconVariant === "BANKDEPOSIT" ? (
        <Bank size={18} weight="regular" color={colors.gray[100]} />
      ) : (
        <Pressable
          justifyContent="center"
          alignItems="center"
          h="5"
          w="5"
          bg="white"
          mr="2"
          isPressed={isActive}
          _pressed={{
            bg: "blue.200",
          }}
          {...rest}
        >
          {isActive ? <CheckFat size={12} weight="fill" color="white" /> : null}
        </Pressable>
      )}

      <Text fontFamily="body" fontSize="md" color="gray.200">
        {" "}
        {title}
      </Text>
    </HStack>
  );
}
