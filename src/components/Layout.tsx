import { Box, Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex height='100vh' overflow='auto'>
      <Flex direction='column' flex='1'>
        <Box flex='1' alignItems='center' justifyContent='center'>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
