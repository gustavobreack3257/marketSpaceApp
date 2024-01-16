import { HStack, View, Text, Pressable, IPressableProps } from "native-base";
import { CheckFat} from 'phosphor-react-native'

type Props = IPressableProps & {
  title: string;
  isActive: boolean;
};

export function PaymentCheckBox({ title, isActive, ...rest }: Props) {

  return (
    <HStack alignItems="center" mb="2">
      <Pressable justifyContent='center' alignItems='center' h="5" w="5" bg="white" mr="2" isPressed={isActive}
      _pressed={{
        bg: 'blue.200'
      }} {...rest}>
        {isActive ? <CheckFat size={12} weight="fill" color="white"/>: null}
      </Pressable>

      <Text fontFamily="body" fontSize="md" color="gray.200">
        {" "}
        {title}
      </Text>
    </HStack>
  );
}
