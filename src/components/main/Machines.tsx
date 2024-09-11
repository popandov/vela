import { TFunction } from 'i18next';
import { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabList, Text, Image, TabPanels, Tab, TabPanel, Stack, VStack, Box, useToken } from '@chakra-ui/react';

import pureeProductionImage from '/images/photo_machines_19.jpg';
import calibratorImage from '/images/photo_machines_27.jpg';
import packagingInProductsImage from '/images/photo_machines_29.jpg';
import MainContentTitle from './MainContentTitlte';
import { AiOutlineSetting } from 'react-icons/ai';

const getMachineTabs = (t: TFunction<'translation', undefined>): string[] => [
  t('pureeProduction'),
  t('calibrator'),
  t('packagingInProducts'),
];

const getMachinePanels = (t: TFunction<'translation', undefined>): ReactNode[] => [
  <Stack alignItems='center' w='full' direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8 }}>
    <VStack alignItems='start' maxW={{ base: 'full', lg: '40%' }} h='full' spacing={{ base: 2 }}>
      <Text fontSize={{ base: '18px' }} lineHeight={{ base: '25px' }} fontWeight={{ base: 700 }} color='black'>
        {t('pureeProductionTitle')}
      </Text>
      <Box color='black' fontSize={{ base: '16px' }} lineHeight={{ base: '22px' }} fontWeight={{ base: 400 }}>
        <Text>
          {t('pureeProductionDescriptionOne')}
          <Text as='span' fontWeight={{ base: 700 }}>
            {t('pureeProductionDescriptionTwo')}
          </Text>
          <Text as='span'>{t('pureeProductionDescriptionThree')}</Text>
        </Text>
      </Box>
    </VStack>
    <Image minW={0} minH={0} src={pureeProductionImage} />
  </Stack>,
  <Stack alignItems='center' w='full' direction={{ base: 'column', lg: 'row' }} spacing={{ base: 8 }}>
    <VStack alignItems='start' maxW={{ base: 'full', lg: '40%' }} spacing={{ base: 2 }}>
      <Text fontSize={{ base: '18px' }} lineHeight={{ base: '25px' }} fontWeight={{ base: 700 }} color='black'>
        {t('calibratorTitle')}
      </Text>
      <Text color='black' fontSize={{ base: '16px' }} lineHeight={{ base: '22px' }} fontWeight={{ base: 400 }}>
        {t('calibratorDescription')}
      </Text>
    </VStack>
    <Image minW={0} minH={0} src={calibratorImage} />
  </Stack>,
  <Stack alignItems='center' w='full' direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: 8 }}>
    <Image minW={0} minH={0} src={packagingInProductsImage} />
    <VStack alignItems='start' maxW={{ base: 'full', lg: '40%' }} spacing={{ base: 2 }}>
      <Text fontSize={{ base: '18px' }} lineHeight={{ base: '25px' }} fontWeight={{ base: 700 }} color='black'>
        {t('packagingInProductsTitle')}
      </Text>
      <Text color='black' fontSize={{ base: '16px' }} lineHeight={{ base: '22px' }} fontWeight={{ base: 400 }}>
        {t('packagingInProductsDescription')}
      </Text>
    </VStack>
  </Stack>,
];

const Machines = () => {
  const { t } = useTranslation();
  const [gray500] = useToken('colors', ['gray.500']);

  const tabs = useMemo(() => getMachineTabs(t), [t]);
  const panels = useMemo(() => getMachinePanels(t), [t]);

  return (
    <Tabs>
      <Stack direction={{ base: 'column', lg: 'row' }} w='full' gap={{ base: 2, lg: 5 }}>
        <MainContentTitle
          icon={AiOutlineSetting}
          title={t('machines')}
          fontSize={{ base: '22px' }}
          lineHeight={{ base: '26px' }}
        />
        <TabList overflowX='auto' paddingBottom={{ base: 4 }} w='full'>
          {tabs.map((tab) => (
            <Tab
              w='full'
              key={tab}
              paddingX={0}
              color='gray.500'
              minW='fit-content'
              fontSize={{ base: '18px' }}
              lineHeight={{ base: '28px' }}
              borderBottom={`2px solid ${gray500}`}
              _selected={{ fontWeight: 700, color: 'black', borderBottom: `2px solid ${gray500}` }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>
      </Stack>

      <TabPanels w='full'>
        {panels.map((panel, index) => (
          <TabPanel padding={0} w='full' key={index}>
            {panel}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default Machines;
