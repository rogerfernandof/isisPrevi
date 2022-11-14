import type { AppProps } from 'next/app'
import { ChakraProvider, Link } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { theme } from '../styles/theme'

import React from 'react'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../styles/swiper.scss";
import '../styles/chatbot.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <ToastContainer />
    </ChakraProvider>
  )

}

export default MyApp
