import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { FaRegCheckCircle } from 'react-icons/fa';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { Image, Stack, VStack, Text, HStack, Icon } from '@chakra-ui/react';

import storageImage from '/images/photo_08.jpg';
import { useMemo } from 'react';
import MainContentTitle from './MainContentTitlte';
import useIsMobile from '../../hooks/is-mobile';

const getInformationList = (t: TFunction<'translation', undefined>) => [
  { description: t('4coolingChambers') },
  { description: t('roomForProduction') },
  { description: `${t('calibrationRoom')},` },
  { description: `${t('offices')},` },
  { description: t('goodsReception') },
  { description: t('storageSpace') },
  { description: t('otherRooms') },
];

const ColdStorage = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const informationList = useMemo(() => getInformationList(t), [t]);

  return (
    <VStack alignItems='flex-start' spacing={8}>
      {isMobile && (
        <MainContentTitle
          title={t('info')}
          fontSize={{ base: '22px' }}
          lineHeight={{ base: '26px' }}
          icon={IoInformationCircleOutline}
        />
      )}
      <Stack direction={{ base: 'column', lg: 'row' }} w='full' spacing={8}>
        <Image w='full' src={storageImage} minW={0} />
        <VStack
          color='black'
          gap={{ base: 4 }}
          alignItems='start'
          fontSize={{ base: '16px' }}
          lineHeight={{ base: '19px' }}
        >
          {!isMobile && (
            <MainContentTitle
              title={t('info')}
              fontSize={{ base: '22px' }}
              lineHeight={{ base: '26px' }}
              icon={IoInformationCircleOutline}
            />
          )}
          <Text pl={{ base: 0, lg: '1.5em' }}>{t('buildingLocationDescription')}</Text>
          <Text pl={{ base: 0, lg: '1.5em' }}>{t('buildingStructureDescription')}</Text>
          <Text pl={{ base: 0, lg: '1.5em' }}>
            {t('buidlingRoomsListings')}{' '}
            <Text as='span' fontWeight={700}>
              {t('severalRooms')}
            </Text>
          </Text>
          <VStack alignItems='start' fontSize={{ base: '16px' }} lineHeight={{ base: '19px' }}>
            {informationList.map(({ description }) => (
              <HStack key={description}>
                <Icon color='gray.500' as={FaRegCheckCircle} />
                <Text>{description}</Text>
              </HStack>
            ))}
          </VStack>
          <Text
            fontSize={{ base: '16px' }}
            lineHeight={{ base: '19px' }}
            pl={{ base: 0, lg: '1.5em' }}
            textAlign={{ base: 'start' }}
          >
            {t('totalAreaDescription')}
          </Text>
          <Text
            fontSize={{ base: '16px' }}
            lineHeight={{ base: '19px' }}
            fontWeight={700}
            pl={{ base: 0, lg: '1.5em' }}
            textAlign={{ base: 'start' }}
          >
            {t('yardDescription')}
          </Text>
          <Text
            fontSize={{ base: '16px' }}
            lineHeight={{ base: '19px' }}
            fontWeight={700}
            pl={{ base: 0, lg: '1.5em' }}
            textAlign={{ base: 'start' }}
          >
            {t('powerInBuildingDescription')}
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
};

export default ColdStorage;
