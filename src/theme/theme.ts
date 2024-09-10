import { extendTheme } from '@chakra-ui/react';

import components from './components';

export const velaTradeTheme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      200: 'rgba(204, 221, 226, .24)',
      500: 'rgba(147, 169, 178, 1)',
      600: 'rgba(152, 162, 179, 1)'
    },
    green: {
      50: '#F8FFFB',
      100: '#E6FFF0',
      200: '#CCFFE4',
      300: '#85E6B7',
      400: '#4AD99B',
      500: '#00B871',
      600: '#00995E',
      700: '#007A4B',
      800: '#005C39',
      900: '#003D26',
    },
    indigo: {
      500: '#4B0082',
    },
    violet: {
      500: '#805AD5',
    },
    turquoise: {
      500: '#319795',
    },
    aqua: {
      500: '#4299e1',
    },
    yellow: {
      500: '#ECC94B',
    },
    red: {
      500: '#e53e3e',
      700: 'rgba(191, 1, 1, 1)',
    },
    black: {
      500: 'rgba(27, 25, 42, 1)',
    },
  },
  components,
  styles: {
    global: {
      body: {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '&::-webkit-scrollbar-track': {
        w: '6px',
        h: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10',
      },
      '&::-webkit-scrollbar-corner': {
        display: 'none',
      },
    },
  },
});
