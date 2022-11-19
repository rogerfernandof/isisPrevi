import { useEffect } from 'react'

import Chatbot from 'react-chatbot-kit'
import config from '../components/chatbot/config'
import ActionProvider from '../components/chatbot/ActionProvider'
import MessageParser from '../components/chatbot/MessageParser'

import {
  Avatar,
  Box,
  Flex,
  Grid,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function Chat() {
  useEffect(() => {
    const interval = setInterval(() => {
      window?.scrollTo(
        0,
        document.querySelector(
          '.react-chatbot-kit-chat-message-container',
        )?.scrollHeight,
      )
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

  return (
    <>
      <Flex
        h="90px"
        w="100%"
        bg="white"
        zIndex={99999}
        position="fixed"
        justifyContent="space-between"
        alignItems="center"
        px="5vw"
      >
        <Flex>
          <Avatar src="images/chatbot/botAvatar.png" />
          <Grid alignItems="center" mx={5}>
            <Text w="max-content">Sarah - Consultora</Text>
            <Text fontWeight="bold">Online</Text>
          </Grid>
        </Flex>
        <Grid>
          <Text
            w="max-content"
            textAlign="end"
            fontWeight="bold"
            fontSize="11px"
          >
            Dúvidas? Fale conosco!
          </Text>
          <Box mt="5px">
            <Text
              p="5px"
              w="max-content"
              bg="#1AD540"
              color="white"
              fontSize="10px"
              fontWeight="bold"
              borderRadius="25px"
            >
              <Link href="https://wa.me/message/JK2WFCPMAAEEB1">
                <a>ENVIE UMA MENSAGEM</a>
              </Link>
            </Text>
          </Box>
        </Grid>
      </Flex>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </>
  )
}
