import {
  Button as ButtonNativeBase,
  Center,
  HStack,
  IButtonProps,
  Text,
  useTheme,
} from "native-base";

import {
  WhatsappLogo,
  Power,
  TrashSimple,
  ArrowLeft,
  Tag,
  Plus
} from "phosphor-react-native";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
  bgColor?: "PRIMARY" | "SECONDARY";
  showIcon?: boolean;
  iconVariation?:
    | "PRIMARY"
    | "SECONDARY"
    | "TERTIARY"
    | "QUATERNARY"
    | "QUINARY";
};
export function Button({
  title,
  variant = "solid",
  bgColor,
  showIcon = false,
  iconVariation ,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <ButtonNativeBase
      w='72'
      h='12'
      px='3'
      bg={
        variant === "solid" && bgColor === "PRIMARY"
          ? "blue.30"
          : variant === "solid" && bgColor === "SECONDARY"
          ? "gray.100"
          : "gray.500"
      }
      rounded={6}
      _pressed={{
        borderWidth: 1,
        borderColor: 'blue.30',
        bg: variant === 'solid' && bgColor === "PRIMARY" ? 'gray.100': variant === 'solid' && bgColor === "SECONDARY" ?'blue.30': 'gray.500'
      }}
      {...rest}
    >
                <HStack alignItems="center" justifyContent="center">
      {showIcon ? (
        <Center>
          {iconVariation === "PRIMARY" ? (
            <WhatsappLogo weight="fill" color={colors.gray[600]} size={14} />
          ) : iconVariation === "SECONDARY" ? (
            <Power weight="regular" size={14} color={colors.gray[600]} />
          ) : iconVariation === "TERTIARY" ? (
            <TrashSimple weight="regular" size={14} color={colors.gray[300]} />
          ) : iconVariation === "QUATERNARY" ? (
            <ArrowLeft weight="regular" size={14} color={colors.gray[200]} />
          ) : iconVariation === 'QUINARY' ?(
            <Tag weight="regular" size={14} color={colors.gray[600]} />
          ):  <Plus weight="regular" size={16} color={colors.gray[600]} />
        }
        </Center>
      ) : null}
      <Text color={bgColor ? "gray.700": "gray.200"} fontFamily="heading" fontSize="sm" ml="2">
        {title}
      </Text>
      </HStack>
    </ButtonNativeBase>
  );
}
