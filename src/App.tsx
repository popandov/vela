import { ChakraProvider } from '@chakra-ui/react';

import MainPage from './pages';
import { velaTradeTheme } from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={velaTradeTheme}>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
