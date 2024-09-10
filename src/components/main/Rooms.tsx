import { ReactNode, useMemo, useState } from 'react';
import { TFunction } from 'i18next';
import { BiMapAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Accordion, VStack, Text, HStack, Image, Stack } from '@chakra-ui/react';

import RoomItem from './RoomItem';
import MainContentTitle from './MainContentTitlte';
import officesImage from '/images/photo_offices_17.jpg';
import otherRoomsImage from '/images/photo_other_rooms_07.jpg';
import coolingChamberOne from '/images/photo_cooling_chambers_09.jpg';
import coolingChamberTwo from '/images/photo_cooling_chambers_10.jpg';
import vegetablesOne from '/images/photo_rooms_for_vegetables_11.jpg';
import vegetablesTwo from '/images/photo_rooms_for_vegetables_12.jpg';
import vegetablesThree from '/images/photo_rooms_for_vegetables_13.jpg';
import calibrationRoomOne from '/images/photo_calibration_room_16.jpg';
import calibrationRoomTwo from '/images/photo_calibration_room_15.jpg';
import useIsMobile from '../../hooks/is-mobile';

type RoomItemProps = {
  title: string;
  content: ReactNode;
  images: ReactNode;
};

const getItems = (t: TFunction<'translation', undefined>): RoomItemProps[] => [
  {
    title: t('coolingChambers'),
    content: (
      <VStack
        w='full'
        fontSize={{ base: '12px' }}
        fontWeight={{ base: 400 }}
        lineHeight={{ base: '17px' }}
        alignItems={{ base: 'start' }}
      >
        <Text>
          {t('eachChamberIsEquipped')}{' '}
          <Text as='span' fontWeight={{ base: 700 }}>
            {t('bitzer')}{' '}
          </Text>
          <Text as='span'>{t('motorsOf15KW')}</Text>
        </Text>
        <Text fontWeight={{ base: 700 }}>{t('chambersAreConstructedWithPanels')}</Text>
        {[t('chamberSizeOne'), t('chamberSizeTwo'), t('chamberSizeThree'), t('chamberSizeFour')].map((item, index) => (
          <Text key={`${item}-${index}`}>{item}</Text>
        ))}
        <Text fontWeight={{ base: 700 }}>{t('totalSize')}</Text>
      </VStack>
    ),
    images: (
      <HStack w={{ base: 'auto', lg: 'full' }} maxH={{ base: 'auto', lg: '500px' }} maxW={{ base: 'auto', lg: '50%' }}>
        <Image h='full' w={{ base: 'auto', lg: 'full' }} minH={0} minW={0} src={coolingChamberOne} />
        <Image h='full' w={{ base: 'auto', lg: 'full' }} minH={0} minW={0} src={coolingChamberTwo} />
      </HStack>
    ),
  },
  {
    title: t('fruitsAndVegetablesProcessing'),
    content: (
      <VStack
        w='full'
        alignItems='start'
        fontSize={{ base: '12px' }}
        fontWeight={{ base: 400 }}
        lineHeight={{ base: '17px' }}
      >
        <Text>{t('theFollowingRoomHasTheDimensions')}</Text>
        <Text>{t('fruitsAndVegetablesDimensions')}</Text>
      </VStack>
    ),
    images: (
      <VStack w={{ base: 'auto', lg: 'full' }} maxW={{ base: 'aut', lg: '50%' }}>
        <Image
          h='full'
          minH={0}
          minW={0}
          src={vegetablesOne}
          w={{ base: 'auto', lg: 'full' }}
          maxH={{ base: 'auto', lg: '250px' }}
        />
        <HStack h='full' w={{ base: 'auto', lg: 'full' }}>
          <Image
            h='full'
            minH={0}
            minW={0}
            src={vegetablesTwo}
            w={{ base: 'auto', lg: 'full' }}
            maxH={{ base: 'auto', lg: '250px' }}
          />
          <Image
            h='full'
            minH={0}
            minW={0}
            src={vegetablesThree}
            w={{ base: 'auto', lg: 'full' }}
            maxH={{ base: 'auto', lg: '250px' }}
          />
        </HStack>
      </VStack>
    ),
  },
  {
    title: t('calibrationRoom'),
    content: (
      <VStack
        w='full'
        alignItems='start'
        fontSize={{ base: '12px' }}
        fontWeight={{ base: 400 }}
        lineHeight={{ base: '17px' }}
      >
        <Text>{t('theFollowingRoomHasTheDimensions')}</Text>
        <Text>{t('callibrationRoomDimensions')}</Text>
      </VStack>
    ),
    images: (
      <HStack h='full' w={{ base: 'auto', lg: 'full' }} maxW={{ base: 'aut', lg: '50%' }}>
        <Image
          minH={0}
          minW={0}
          src={calibrationRoomOne}
          h={{ base: 'auto', lg: '500px' }}
          w={{ base: 'auto', lg: 'full' }}
          maxH={{ base: 'auto', lg: '500px' }}
        />
        <Image
          h='full'
          minH={0}
          minW={0}
          src={calibrationRoomTwo}
          w={{ base: 'auto', lg: 'full' }}
          maxH={{ base: 'auto', lg: '500px' }}
        />
      </HStack>
    ),
  },
  {
    title: t('offices'),
    content: (
      <VStack
        alignItems='start'
        w='full'
        fontSize={{ base: '12px' }}
        fontWeight={{ base: 400 }}
        lineHeight={{ base: '17px' }}
      >
        <Text>{t('theFollowingRoomHasTheDimensions')}</Text>
        <Text>{t('officesDimensionsOne')}</Text>
        <Text>{t('officesDimensionsTwo')}</Text>
      </VStack>
    ),
    images: (
      <Image
        maxH={{ base: 'auto', lg: '500px' }}
        h='full'
        maxW={{ base: 'aut', lg: '50%' }}
        w={{ base: 'auto', lg: 'full' }}
        minW={0}
        src={officesImage}
      />
    ),
  },
  {
    title: t('otherRooms'),
    content: (
      <VStack
        alignItems='start'
        w='full'
        fontSize={{ base: '12px' }}
        fontWeight={{ base: 400 }}
        lineHeight={{ base: '17px' }}
      >
        <Text>{t('goodsReception')}</Text>
        <Text>{t('storageSpace')}</Text>
        <Text>{t('otherRooms')}</Text>
        <Text fontWeight={{ base: 700 }}>{t('totalAreaOfOtherRooms')}</Text>
      </VStack>
    ),
    images: (
      <Image
        h='full'
        src={otherRoomsImage}
        w={{ base: 'auto', lg: 'full' }}
        maxW={{ base: 'auto', lg: '50%' }}
        maxH={{ base: 'auto', lg: '500px' }}
      />
    ),
  },
];

const Rooms = () => {
  const { t } = useTranslation();

  const isMobile = useIsMobile();

  const items = useMemo(() => getItems(t), [t]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedItem = items[selectedIndex];

  return (
    <VStack w='full' alignItems='start'>
      <MainContentTitle title={t('offices')} icon={BiMapAlt} />
      <Stack direction={{ base: 'column', lg: 'row' }} w='full'>
        <Accordion onChange={(item) => setSelectedIndex(item as number)} defaultIndex={0} w='full'>
          {items.map((room, index) => (
            <RoomItem key={room.title} {...room} isCurrentItemSelected={selectedIndex === index} />
          ))}
        </Accordion>
        {!isMobile && selectedItem.images}
      </Stack>
    </VStack>
  );
};

export default Rooms;
