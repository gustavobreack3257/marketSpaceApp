import {
  Center,
  HStack,
  Heading,
  Modal as ModalNativeBase,
  Pressable,
  Text,
  VStack,
  View,
  Switch,
  Checkbox,
  useTheme,
  Stack,
  Box,
  ISwitchProps,
  FlatList,
} from "native-base";

import {X} from 'phosphor-react-native'
import SwichtOnSVG from '@assets/OnSwitchFilter.svg'
import SwichtOffSVG from '@assets/OffSwitchFilter.svg'

import { ProductStatusMarking } from "@components/ProductStatusMarking";
import { PaymentCheckBox } from "@components/PaymentCheckBox";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useState } from "react";

type Props = ISwitchProps & TouchableOpacityProps &{
  visible: boolean;
  isClose: any;

};
export function Modal({ visible , isClose, ...rest }: Props) {
  const { colors } = useTheme();

  const [groups, setGroups] = useState<string[]>(['Novo', 'Usado'])
  const [groupSelected, setGroupSelected] = useState('')
  const [switchState, setSwitchState] = useState(false)
  const [checkBoxData, setCheckBoxData] = useState([
    {name: 'Boleto', checked: false},
    {name: 'Pix', checked: false},
    {name: 'Dinheiro', checked: false},
    {name: 'Cartão de crédito', checked: false},
    {name: 'Depósito Bancário', checked: false}
  ]);
  const [checkBoxStatus, setCheckBoxStatus] = useState(false)

  function toggleCheckBox(itemName: string){
    setCheckBoxData((prevData) =>
      prevData.map((item) =>
        item.name === itemName ? { ...item, checked: !item.checked } : item
      )
    );
  };
  return (
    <ModalNativeBase
      animationPreset="slide"
      isOpen={visible}
      onClose={isClose}
      backdropVisible
      {...rest}
    >
      <VStack mt="full" bg="gray.600" h={584} w="full" px="6" pt="3">
        <Center>
          <View w="16" h="1" bg="gray.400" />
        </Center>

        <HStack  pt="8" justifyContent='space-between'>
          <Heading
            fontFamily="heading"
            fontSize="lg"
            color="gray.100"

            mb="6"
          >
            Filtrar anúncios
          </Heading>

          <TouchableOpacity onPress={isClose}>
          <X weight="regular" size={24} color={colors.gray[400]}/>
            </TouchableOpacity>
        </HStack>

        <Text fontFamily="heading" fontSize="sm" color="gray.200">
          Condição
        </Text>

        <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <ProductStatusMarking
          title={item.toLocaleUpperCase()}
          isActivity={groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()}
          onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}

            maxH={10}
            minH={10}
        />

        <Text fontFamily="heading" color="gray.200" fontSize="sm" mt="6">
          Aceita troca?
        </Text>

          <Pressable mt='3' onPress={() => setSwitchState(prevState => !prevState)}  >
            {switchState ? <SwichtOnSVG/>: <SwichtOffSVG/>}
          </Pressable>

        <Text fontFamily="heading" fontSize="sm" mt="6" mb="3">
          Meios de pagamento aceitos
        </Text>

          <FlatList
          data={checkBoxData}
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <PaymentCheckBox
            title={item.name}
            isActive={item.checked}
            onPress={() => toggleCheckBox(item.name)}/>

          )}/>


      </VStack>
    </ModalNativeBase>
  );
}
