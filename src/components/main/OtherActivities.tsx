import { BsSafe2 } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import otherActivitiesImage from '/images/photo_other_activities_30.jpg';
import otherActivitiesImage1 from '/images/photo_other_activities_31.jpg';
import { Text, Image, Stack, VStack, HStack } from '@chakra-ui/react';

import MainContentTitle from './MainContentTitlte';

const OtherActivities = () => {
  const { t } = useTranslation();

  return (
    <VStack spacing={8} alignItems='start' w='full'>
      <MainContentTitle
        icon={BsSafe2}
        fontSize={{ base: '22px' }}
        lineHeight={{ base: '26px' }}
        title={t('otherActivities').toUpperCase()}
      />
      <Stack spacing={8} direction={{ base: 'column', lg: 'row' }}>
        <VStack
          spacing={8}
          color='black'
          justifyContent='center'
          alignItems='start'
          fontSize={{ base: '20px' }}
          w={{ base: 'full', lg: '60%' }}
          lineHeight={{ base: '24px' }}
        >
          <VStack alignItems='start' spacing={2}>
            <Text fontWeight={700}>{t('forkliftsTitle').toUpperCase()}</Text>
            <Text fontSize={{ base: '16px' }} lineHeight={{ base: '22px' }}>
              {t('forkliftsDescription')}
            </Text>
          </VStack>
          <VStack alignItems='start' spacing={2}>
            <Text fontWeight={700}>{t('scaleTitle').toUpperCase()}</Text>
            <Text fontSize={{ base: '16px' }} lineHeight={{ base: '22px' }}>
              {t('scaleDescription')}
            </Text>
          </VStack>
        </VStack>
        <HStack w={{ base: 'auto', lg: 'full' }} maxH={{ base: 'auto', lg: '500px' }} maxW={{ base: 'auto', lg: '50%' }}>
          <Image h='full' w={{ base: 'auto', lg: 'full' }} minH={0} minW={0} src={otherActivitiesImage} borderRadius='5px' />
          <Image h='full' w={{ base: 'auto', lg: 'full' }} minH={0} minW={0} src={otherActivitiesImage1} borderRadius='5px' />
        </HStack>
        {/* <Image w='full' minW={0} minH={0} src={otherActivitiesImage} borderRadius='5px' /> */}
      </Stack>
    </VStack>
  );
};

export default OtherActivities;
