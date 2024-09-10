import { useTranslation } from 'react-i18next';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { Box, HStack, Icon, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <VStack
      w='full'
      bg='black'
      gap={{ base: '16px', lg: '20px' }}
      padding={{ base: '32px 20px 32px 20px', lg: '40px 74px 40px 74px' }}
    >
      <HStack w='full' justifyContent='space-between'>
        <Text color='white' fontSize={{ base: '18px' }} fontWeight={{ base: 400 }} lineHeight={{ base: '22px' }}>
          {t('velaTradingDoo')}
        </Text>
        <HStack>
          <Icon as={FaTwitter} w={{ base: '20px', lg: '24px' }} h={{ base: '20px', lg: '24px' }} color='gray.600' />
          <Icon as={FaLinkedin} w={{ base: '20px', lg: '24px' }} h={{ base: '20px', lg: '24px' }} color='gray.600' />
          <Icon as={FaFacebook} w={{ base: '20px', lg: '24px' }} h={{ base: '20px' }} color='gray.600' />
        </HStack>
      </HStack>
      <Box w='full' marginX='20%' bg='gray.500' h='1px' />
      <Text
        color='white'
        fontSize={{ base: '14px' }}
        fontWeight={{ base: 400 }}
        lineHeight={{ base: '17px' }}
        alignSelf={{ base: 'start', lg: 'center' }}
      >
        {t('allRightsReserved')}
      </Text>
    </VStack>
  );
};

export default Footer;
