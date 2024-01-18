import {
  Center,
  HStack,
  Heading,
  IPressableProps,
  Pressable,
  useTheme,
} from "native-base";


import { XCircle } from "phosphor-react-native";

type Props = IPressableProps & {
  title: string;
  selectingBackGroundColor?: 'PRIMARY' | 'SECONDARY';
  isActivity?: boolean;

};
export function ProductStatusMarking({
  title,
  isActivity ,
  selectingBackGroundColor,
  ...rest
}: Props) {
  const { colors } = useTheme();

  return (
    <Pressable
      justifyContent="center"
      alignItems="center"
      bg={isActivity  ? "blue.200"  : selectingBackGroundColor === 'PRIMARY' ? 'blue.100': selectingBackGroundColor === 'SECONDARY' ? 'gray.200': 'gray.500' }
      rounded="full"
      w="20"
      h="7"
      mt="3"
      mr="2"
      isPressed={isActivity}
      _pressed={{
        backgroundColor: 'blue.200'
      }}
      {...rest}
    >
      <HStack>
        <Heading
          fontFamily="heading"
          fontSize="xs"
          textTransform='uppercase'
          numberOfLines={1}
          color={isActivity ? 'white' : selectingBackGroundColor ? 'gray.700' : 'gray.300'}
          mr='1'
        >
          {title}
        </Heading>

        { isActivity  ? <XCircle weight="fill" color={colors.gray[600]} size={16}/>: null}
      </HStack>
    </Pressable>
  );
}
