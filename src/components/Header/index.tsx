import { Flex } from '@chakra-ui/react'
import { HeaderLinks } from './HeaderLinks'

export function Header() {
  return (
    <Flex
      zIndex={999}
      align="center"
      justify={['space-around', 'space-around', 'center']}
      top={0}
      gap="90"
      w="100%"
      h="158px"
      py='12px'
      bg="#ffffffe4"
    >
      {<HeaderLinks />}
    </Flex>
  )
}
