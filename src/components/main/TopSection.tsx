import { useTranslation } from 'react-i18next';
import { Stack, useToken, VStack, Text } from '@chakra-ui/react';

import ImageContainer from './ImageContainer';

const TopSection = () => {
  const { t } = useTranslation();

  const [red700] = useToken('colors', ['red.700']);

  return (
    <Stack
      w='full'
      paddingX={2}
      marginBottom={50}
      alignItems='center'
      direction={{ base: 'column', lg: 'row' }}
      borderX={{ base: `10px solid ${red700}`, lg: `50px solid ${red700}` }}
    >
      <VStack w='full'>
        <VStack alignItems='start' w='fit-content'>
          <Text
            color='red.700'
            fontWeight={400}
            fontSize={{ base: '40px', lg: '60px' }}
            lineHeight={{ base: '48px', lg: '72px' }}
            width={{ base: 'fit-content', lg: '320px' }}
          >
            {t('companyName').toUpperCase()}
          </Text>
          <Text
            color='black'
            fontWeight={400}
            width={{ base: 'fit-content', lg: '400px' }}
            fontSize={{ base: '16px', lg: '20px' }}
            lineHeight={{ base: '19px', lg: '24px' }}
          >
            {t('companyDescription')}
          </Text>
        </VStack>
      </VStack>
      <ImageContainer />
    </Stack>
  );
};

export default TopSection;
