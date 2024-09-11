import { Box, Flex } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex height='100vh' overflow='auto' width='100%'>
      <Flex direction='column' flex='1'>
        <Box flex='1'>{children}</Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
