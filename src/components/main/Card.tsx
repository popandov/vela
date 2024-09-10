import { IconType } from 'react-icons';
import { useToken, VStack, Text, Icon } from '@chakra-ui/react';

interface Props {
  icon: IconType;
  title: string;
  content: React.ReactNode;
}

const Card = ({ icon, title, content }: Props) => {
  const [red700] = useToken('colors', ['red.700']);

  return (
    <VStack
      gap={4}
      w='full'
      role='group'
      color='red.700'
      textAlign='center'
      borderRadius='12px'
      _hover={{ bg: 'red.700' }}
      border={`1px solid ${red700}`}
      padding='24px 60px 24px 60px'
      paddingInline={{ base: '16px' }}
      justifyContent={{ base: 'flex-start', lg: 'space-between' }}
    >
      <VStack gap={{ base: 2, lg: 3 }} _groupHover={{ color: 'white' }}>
        <Icon w='32px' h='32px' as={icon} />
        <Text fontSize={{ base: '24px', lg: '28px' }} lineHeight={{ base: '29px', lg: '34px' }} fontWeight={400}>
          {title}
        </Text>
      </VStack>
      {content}
    </VStack>
  );
};

export default Card;
