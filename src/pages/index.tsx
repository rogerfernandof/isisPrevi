import React from 'react'
import Link from 'next/link'

import { Box, Image } from '@chakra-ui/react'

import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import { Alert } from '../components/Alert/index'
import { Slider } from '../components/Slider/index'
import { About } from '../components/About/index';

export default function Home() {
  return (
    <Layout>
      <Box
        position="fixed"
        bottom={5}
        right={5}
        zIndex={9999999}
      >
        <Link href="https://api.whatsapp.com/send?phone=5561996203133&text=Quero%20tirar%20minhas%20duvidas!">
          <a>
            <Image
              src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/logo-whatsapp-png-transparent-background-8.png"
              alt="WhatsApp"
              width="70px"
              height="70px"
            />
          </a>
        </Link>
      </Box>
      <main>
        <Hero />
        <Alert />
        <Slider />
        <About />
      </main>
    </Layout>
  )
}
