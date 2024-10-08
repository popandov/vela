import { ReactNode } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { AccordionButton, AccordionItem, AccordionPanel, Icon, Text, VStack } from '@chakra-ui/react';

import useIsMobile from '../../hooks/is-mobile';

interface Props {
  content: ReactNode;
  images: ReactNode;
  title: string;
  isCurrentItemSelected: boolean;
}

const RoomItem = ({ content, images, title, isCurrentItemSelected }: Props) => {
  const isMobile = useIsMobile();

  return (
    <AccordionItem gap={{ base: '12px' }} w='full'>
      <AccordionButton
        width='full'
        color='black'
        paddingX={0}
        paddingY='16px'
        justifyContent='space-between'
        fontSize={{ base: '18px' }}
        lineHeight={{ base: '24px' }}
        _hover={{backgroundColor: 'none'}}
        fontWeight={{ base: isCurrentItemSelected ? 600 : 400 }}
      >
        <Text textAlign='start'>{title.toUpperCase()}</Text>
        <Icon color={isCurrentItemSelected ? 'black' : 'gray.500'} as={isCurrentItemSelected ? FaMinus : FaPlus} />
      </AccordionButton>
      <AccordionPanel px={0}>
        <VStack gap={{ base: '12px' }} spacing={8}>
          {content}
          {isMobile && images}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default RoomItem;
