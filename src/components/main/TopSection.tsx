import { useTranslation } from 'react-i18next';
import { Stack, useToken, VStack, Text } from '@chakra-ui/react';

import ImageContainer from './ImageContainer';

const TopSection = () => {
  const { t } = useTranslation();

  const [red700] = useToken('colors', ['red.700']);

  return (
    <Stack
      paddingX={2}
      marginBottom={50}
      alignItems='center'
      direction={{ base: 'column', lg: 'row' }}
      borderX={{ base: `10px solid ${red700}`, lg: `50px solid ${red700}` }}
    >
      <VStack alignItems='start' paddingX={{ base: '0', lg: '4em' }} width={{ base: 'full', sm: 'full', lg: '40%' }}>
        <Text
          color='red.700'
          fontWeight={400}
          width={{ base: 'fit-content' }}
          fontSize={{ base: '40px', lg: '60px' }}
          lineHeight={{ base: '48px', lg: '72px' }}
        >
          {t('companyName').toUpperCase()}
        </Text>
        <Text
          color='black'
          fontWeight={400}
          fontSize={{ base: '16px', lg: '20px' }}
          lineHeight={{ base: '19px', lg: '24px' }}
        >
          {t('companyDescription')}
        </Text>
      </VStack>
      <ImageContainer />
    </Stack>
  );
};

export default TopSection;
