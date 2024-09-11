import { useMemo } from 'react';
import { TFunction } from 'i18next';
import { IconType } from 'react-icons';
import { useTranslation } from 'react-i18next';
import { FaRegSnowflake } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { Stack, VStack, Text, Box, Link } from '@chakra-ui/react';

import Card from './Card';

type CardProps = {
  icon: IconType;
  title: string;
  content: React.ReactNode;
};

const getAllCards = (t: TFunction<'translation', undefined>): CardProps[] => [
  {
    title: t('contentInfoTitle').toUpperCase(),
    icon: HiOutlinePhone,
    content: (
      <VStack
        gap='6px'
        color='black'
        fontWeight={400}
        _groupHover={{ color: 'white' }}
        fontSize={{ base: '18px', lg: '22px' }}
        lineHeight={{ base: '22px', lg: '27px' }}
      >
        <Stack
          direction={{
            'base': 'row',
            'sm': 'row',
            'md': 'column',
            'lg': 'column',
            'xl': 'row',
            '2xl': 'row',
          }}
        >
          <Text fontWeight={700}>{t('mobilePhoneOneLabel')}</Text>
          <Link href={`tel:${t('mobilePhoneOneContent')}`}>
            <Text>{t('mobilePhoneOneContent')}</Text>
          </Link>
        </Stack>
        <Stack
          direction={{
            'base': 'row',
            'sm': 'row',
            'md': 'column',
            'lg': 'column',
            'xl': 'row',
            '2xl': 'row',
          }}
        >
          <Text fontWeight={700}>{t('mobilePhoneTwoLabel')}</Text>
          <Link href={`tel:${t('mobilePhoneTwoContent')}`}>
            <Text>{t('mobilePhoneTwoContent')}</Text>
          </Link>
        </Stack>
        <Stack
          direction={{
            'base': 'row',
            'sm': 'row',
            'md': 'column',
            'lg': 'column',
            'xl': 'row',
            '2xl': 'row',
          }}
        >
          <Text fontWeight={700}>{t('emailLabel')}</Text>
          <Link href={`mailto:${t('emailContent')}`}>
            <Text>{t('emailContent')}</Text>
          </Link>
        </Stack>
      </VStack>
    ),
  },
  {
    title: t('addressOfCoolerTitle').toUpperCase(),
    icon: FaRegSnowflake,
    content: (
      <Text
        fontWeight={400}
        paddingTop={{ lg: '2em' }}
        _groupHover={{ color: 'white' }}
        width={{ sm: '250px', lg: 'full' }}
        fontSize={{ base: '18px', lg: '22px' }}
        lineHeight={{ base: '22px', lg: '27px' }}
      >
        {t('addressOfCoolerContent')}
      </Text>
    ),
  },
  {
    title: t('addressOfWarehouseTitle').toUpperCase(),
    icon: HiOutlineArchiveBox,
    content: (
      <Text
        fontWeight={400}
        paddingTop={{ lg: '2em' }}
        _groupHover={{ color: 'white' }}
        width={{ sm: '250px', lg: 'full' }}
        fontSize={{ base: '18px', lg: '22px' }}
        lineHeight={{ base: '22px', lg: '27px' }}
      >
        {t('addressOfWarehouseContent')}
      </Text>
    ),
  },
];

const CardContainer = () => {
  const { t } = useTranslation();

  const cards = useMemo(() => getAllCards(t), [t]);

  return (
    <Box py={10}>
      <Stack
        w='full'
        gap={{ base: '24px' }}
        paddingX={{ base: '10px', lg: '50px' }}
        direction={{ base: 'column', lg: 'row' }}
      >
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </Stack>
    </Box>
  );
};

export default CardContainer;
