import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#181B23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4B4D63',
      '500': '#616480',
      '400': '#797D9A',
      '300': '#9699B0',
      '200': '#B3B5C6',
      '100': '#D1D2DC',
      '50': '#EEEEf2',
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'DM Sans',
    body: 'DM Sans',
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },

      html: {
        scrollBarGutter: 'stable',
        scrollBarWidth: 'auto',
        overflowY: 'auto',
      },

      body: {
        color: 'black',
        backgroundColor: 'white',
        padding: 0,
        margin: 0,
      },

      ul: {
        listStyle: 'none',
      },

      img: {
        height: 'fit-content',
      },
    },
  },
})
