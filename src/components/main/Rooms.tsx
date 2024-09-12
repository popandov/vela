import { ReactNode, useMemo, useState } from 'react';
import { TFunction } from 'i18next';
import { BiMapAlt } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Accordion, VStack, Text, HStack, Image, Stack } from '@chakra-ui/react';

import RoomItem from './RoomItem';
import useIsMobile from '../../hooks/is-mobile';
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
        fontWeight={{ base: 400 }}
        alignItems={{ base: 'start' }}
        fontSize={{ base: '16px' }}
        lineHeight={{ base: '19px' }}
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
        <Image h='full' w={{ base: 'auto', lg: 'full' }} minH={0} minW={0} src={coolingChamberOne} borderRadius='5px' />
        <Image h='full' w={{ base: 'auto', lg: 'full' }} minH={0} minW={0} src={coolingChamberTwo} borderRadius='5px' />
      </HStack>
    ),
  },
  {
    title: t('fruitsAndVegetablesProcessing'),
    content: (
      <VStack
        w='full'
        alignItems='start'
        fontWeight={{ base: 400 }}
        fontSize={{ base: '16px' }}
        lineHeight={{ base: '19px' }}
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
          borderRadius='5px'
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
             borderRadius='5px'
            w={{ base: 'auto', lg: 'full' }}
            maxH={{ base: 'auto', lg: '250px' }}
          />
          <Image
            h='full'
            minH={0}
            minW={0}
            borderRadius='5px'
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
        fontWeight={{ base: 400 }}
        fontSize={{ base: '16px' }}
        lineHeight={{ base: '19px' }}
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
          borderRadius='5px'
          src={calibrationRoomOne}
          h={{ base: 'auto', lg: '500px' }}
          w={{ base: 'auto', lg: 'full' }}
          maxH={{ base: 'auto', lg: '500px' }}
        />
        <Image
          h='full'
          minH={0}
          minW={0}
          borderRadius='5px'
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
        w='full'
        alignItems='start'
        fontWeight={{ base: 400 }}
        fontSize={{ base: '16px' }}
        lineHeight={{ base: '19px' }}
      >
        <Text>{t('theFollowingRoomHasTheDimensions')}</Text>
        <Text>{t('officesDimensionsOne')}</Text>
        <Text>{t('officesDimensionsTwo')}</Text>
      </VStack>
    ),
    images: (
      <Image
        h='full'
        minW={0}
        src={officesImage}
        borderRadius='5px'
        maxH={{ base: 'auto', lg: '500px' }}
        maxW={{ base: 'aut', lg: '50%' }}
        w={{ base: 'auto', lg: 'full' }}
      />
    ),
  },
  {
    title: t('otherRooms'),
    content: (
      <VStack
        w='full'
        alignItems='start'
        fontSize={{ base: '16px' }}
        lineHeight={{ base: '19px' }}
        fontWeight={{ base: 400 }}
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
        minW={0}
        borderRadius='5px'
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
      <MainContentTitle icon={BiMapAlt} title={t('rooms')} fontSize={{ base: '22px' }} lineHeight={{ base: '26px' }} />
      <Stack direction={{ base: 'column', lg: 'row' }} w='full' spacing={8}>
        <Accordion
          w='full'
          defaultIndex={selectedIndex}
          onChange={(item) => setSelectedIndex((item as number))}
        >
          {items.map((room, index) => (
            <RoomItem key={room.title} {...room} isCurrentItemSelected={selectedIndex === index} />
          ))}
        </Accordion>
        {!isMobile && selectedItem?.images}
      </Stack>
    </VStack>
  );
};

export default Rooms;
