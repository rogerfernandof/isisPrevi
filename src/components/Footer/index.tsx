import { Container, Wrap, Grid, Flex, Text, UnorderedList, ListItem, Icon } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer() {
  const itemsLeftRow = [
    {
      title: '(61) 98191-8889',
    },
    {
      title: 'salariomaternidade@isisprevi.com.br'
    },
    {
      title: 'Atendimento em todo o Brasil'
    },
    {
      title: 'CNPJ 65.787.144/0001-85',
    },
    {
      title: 'Copyright ©2022 ISIS PREVI. Todos os direitos reservados.'
    },
]
  const itemsRightRow = [
    {
      name: 'facebook',
      icon: FaFacebook,
      href: 'https://www.facebook.com/isispreviassessoria',
    },
    {
      name: 'instagram',
      icon: FaInstagram,
      href: 'https://www.instagram.com/salariomaternidadeoficial',
    },
    {
      name: 'whatsApp',
      icon: FaWhatsapp,
      href: 'https://wa.me/message/JK2WFCPMAAEEB1',
    }
  ]
  return (
    <Container as='footer' maxW='1030px' py='60px'>
        <Flex justifyContent='space-between' flexDir={['column', 'column','row']}>
        <Grid p='20px'>
          <UnorderedList>
            {itemsLeftRow.map((item) => {
              return (
                <ListItem
                  key={uuidv4()}
                  mb='17px'
                  fontSize='16px'
                  fontWeight='bold'
                  listStyleType='none'
                >
                  {item.title}
                </ListItem>
              )
            })}
          </UnorderedList>
        </Grid>
        <Flex p='20px'>
          <UnorderedList
            display='flex'
            gap={5}
            alignItems='center'
          >
            {itemsRightRow.map((item) => {
              return (
                <ListItem
                  key={uuidv4()}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  mb='17px'
                  w='50px'
                  h='50px'
                  color='white'
                  bg='#0e6188'
                  fontSize='16px'
                  fontWeight='bold'
                  borderRadius='50px'
                  listStyleType='none'
                >
                  {
                    <Link href={item.href}>
                      <a style={{display: 'flex'}}>
                        <Icon
                          as={item.icon}
                          w='25px'
                          h='25px'
                        />
                      </a>
                      </Link>
                  }
                </ListItem>
              )
            })}
          </UnorderedList>
        </Flex>
        </Flex>
        <Flex
          justifyContent='center'
        >
        <Link
        href="/"
        >
          <a>
            <img
              src="/images/Logo_Footer.png"
              alt=""
              width="200px"
              height='200px'
            />
          </a>
        </Link>
        </Flex>
    </Container>
  );
}