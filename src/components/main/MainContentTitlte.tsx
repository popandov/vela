import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    icon: IconType;
    title: string;
}

const MainContentTitle = ({icon, title}: Props) => {
  return (
    <HStack color='gray.500'>
      <Icon width={{ base: '24px' }} height={{ base: '24px' }} as={icon} />
      <Text fontSize={{ base: '18px' }} fontWeight={{ base: 400 }} lineHeight={{ base: '22px' }}>
        {title.toUpperCase()}
      </Text>
    </HStack>
  );
};

export default MainContentTitle;
