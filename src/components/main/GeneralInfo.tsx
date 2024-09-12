import { useTranslation } from 'react-i18next';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { Stack, Image, VStack, Text } from '@chakra-ui/react';

import MainContentTitle from './MainContentTitlte';
import generalInfoImage from '/images/photo_general_info_31.jpg';

const GeneralInfo = () => {
  const { t } = useTranslation();

  return (
    <Stack direction={{ base: 'column-reverse', lg: 'row' }} w='full' spacing={8}>
      <Image minW={0} minH={0} w='full' src={generalInfoImage} borderRadius='5px' />
      <VStack w='full' alignItems='start' spacing={4}>
        <MainContentTitle
          fontSize={{ base: '22px' }}
          lineHeight={{ base: '26px' }}
          icon={HiOutlineInformationCircle}
          title={t('generalInfoTitle').toUpperCase()}
        />
        <VStack alignItems='start' fontSize={{ base: '16px' }} lineHeight={{ base: '19px' }} spacing={4}>
          <Text>{t('generalInfoParagraphOne')}</Text>
          <Text>
            {t('generalInfoParagraphTwo')}
            <Text as='span' fontWeight={700}>
              {t('generalInfoParagraphThree')}
            </Text>
            <Text as='span'>{t('generalInfoParagraphFour')}</Text>
          </Text>
          <VStack alignItems='start' spacing={4}>
            <Text>{t('generalInfoParagraphFive')}</Text>
            <Text>
              {t('generalInfoParagraphSix')}
              <Text as='span' fontWeight={700}>
                {t('generalInfoParagraphSeven')}
              </Text>
              <Text as='span'>{t('generalInfoParagraphEight')}</Text>
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default GeneralInfo;
