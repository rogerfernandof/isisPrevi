import React from 'react'

import {
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react'

export function Alert() {
  return (
    <Box bg="white">
      <Flex w={['100%']} maxW="830px" mx="auto">
        <Flex
          alignItems="center"
          mx="25px"
          display={['flex', 'flex']}
        >
          <Image
            src="/images/SetaR.png"
            width="max-content"
            boxSize="200px"
            h="auto"
            alt="arrow"
          />
        </Flex>
        <Flex my={20} py="15px" textAlign="center">
          <Text fontSize="1.2rem">
            Atenção! O Salário Maternidade é um benefício
            que pode ser recebido apenas UMA VEZ por filho.
            Fornecer informações falsas no cadastro a seguir
            ou solicitar o beneficio depois de já ter
            recebido implicará na cobrança de multa de
            R$1000,00, que deverá ser paga em até 30
            (trinta) dias à Isis Previ Assessoria e
            Consultoria.
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          mx="25px"
          display={['flex', 'flex']}
        >
          <Image
            src="/images/SetaL.png"
            width="max-content"
            boxSize="200px"
            h="auto"
            alt="arrow"
          />
        </Flex>
      </Flex>
    </Box>
  )
}
