import { HStack, Icon, Text, TextProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  title: string;
}

const MainContentTitle = ({ icon, title, ...textProps }: Props & TextProps) => {
  return (
    <HStack color='gray.500'>
      <Icon width={{ base: '24px' }} height={{ base: '24px' }} as={icon} />
      <Text fontSize={{ base: '18px' }} fontWeight={{ base: 400 }} lineHeight={{ base: '22px' }} {...textProps}>
        {title.toUpperCase()}
      </Text>
    </HStack>
  );
};

export default MainContentTitle;
